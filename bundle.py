import os
import re

def bundle():
    dir_path = os.path.dirname(os.path.abspath(__file__))
    index_path = os.path.join(dir_path, 'index.html')
    css_path = os.path.join(dir_path, 'styles.css')
    js_path = os.path.join(dir_path, 'app.js')
    
    output_path = os.path.join(os.path.dirname(dir_path), 'previsualizacion-autoevaluacion.html')
    
    print(f"Reading files from {dir_path}...")
    
    with open(index_path, 'r', encoding='utf-8') as f:
        html = f.read()
        
    with open(css_path, 'r', encoding='utf-8') as f:
        css = f.read()
        
    with open(js_path, 'r', encoding='utf-8') as f:
        js = f.read()
        
    # Replace stylesheet link or existing style tag
    if '<link rel="stylesheet" href="styles.css">' in html:
        html = html.replace('<link rel="stylesheet" href="styles.css">', f'<style>\n{css}\n</style>')
    elif '<style>' in html:
        html = re.sub(r'<style>[\s\S]*?</style>', f'<style>\n{css}\n</style>', html, count=1)

    # Replace script link or existing script tag
    if '<script src="app.js"></script>' in html:
        html = html.replace('<script src="app.js"></script>', f'<script>\n{js}\n</script>')
    elif '<script>' in html:
        # replace the last script tag which contains app.js
        s_idx = html.rfind('<script>')
        e_idx = html.rfind('</script>')
        if s_idx != -1 and e_idx != -1:
            html = html[:s_idx] + f'<script>\n{js}\n</script>' + html[e_idx+9:]
    
    print(f"Writing bundled file to {output_path}...")
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(html)
    
    # Also keep index.html in sync for direct Vercel deployment
    with open(index_path, 'w', encoding='utf-8') as f:
        f.write(html)
        
    print("Bundling and index.html synchronization complete!")

if __name__ == '__main__':
    bundle()
