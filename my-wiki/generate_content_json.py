import os
import json
import markdown
import re
import yaml  # Use PyYAML for parsing frontmatter

def get_content(directory):
    content = []
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.md') or file.endswith('.mdx'):
                try:
                    with open(os.path.join(root, file), 'r', encoding='utf-8') as f:
                        md_content = f.read()

                        # Extract frontmatter using regex
                        frontmatter_match = re.match(r'^---\s*\n(.*?)\n---\s*\n', md_content, re.DOTALL)
                        frontmatter = {}
                        if frontmatter_match:
                            try:
                                frontmatter = yaml.safe_load(frontmatter_match.group(1))
                            except yaml.YAMLError as e:
                                print(f"Warning: Unable to parse frontmatter in {file}: {e}")

                        # Use 'title' from frontmatter if available
                        title = frontmatter.get('title', os.path.splitext(file)[0])

                        # Remove frontmatter from content
                        md_content = re.sub(r'^---\s*\n.*?\n---\s*\n', '', md_content, flags=re.DOTALL)

                        # Convert Markdown to HTML
                        html_content = markdown.markdown(md_content)

                        # Generate URL
                        url = '/docs/' + os.path.relpath(os.path.join(root, file), directory).replace('\\', '/')
                        url = os.path.splitext(url)[0]  # Remove file extension
                        if url.endswith('/index'):
                            url = url[:-5]  # Remove 'index' from the end of the URL

                        content.append({
                            'title': title,
                            'content': html_content,
                            'url': url
                        })
                except UnicodeDecodeError:
                    print(f"Warning: Unable to read file {file} with UTF-8 encoding. Skipping this file.")
    return content

def generate_json(content_dir, output_file):
    content = get_content(content_dir)
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(content, f, ensure_ascii=False, indent=2)
    print(f"Generated {output_file} with {len(content)} articles.")

# Paths
docs_dir = 'docs'
static_dir = 'static'
output_file = os.path.join(static_dir, 'content.json')

# Generate JSON file
generate_json(docs_dir, output_file)

print("JSON generation complete.")
