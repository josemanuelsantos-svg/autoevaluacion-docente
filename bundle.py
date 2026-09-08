import os
import re

def bundle():
    dir_path = os.path.dirname(os.path.abspath(__file__))
    index_path = os.path.join(dir_path, 'index.html')
    css_path = os.path.join(dir_path, 'styles.css')
    js_path = os.path.join(dir_path, 'app.js')
    
    # Target output path
    output_path = os.path.join(os.path.dirname(dir_path), 'previsualizacion-autoevaluacion.html')
    
    print(f"Reading files from {dir_path}...")
    
    with open(index_path, 'r', encoding='utf-8') as f:
        html = f.read()
        
    with open(css_path, 'r', encoding='utf-8') as f:
        css = f.read()
        
    with open(js_path, 'r', encoding='utf-8') as f:
        js = f.read()
        
    # Replace link to stylesheet
    html = html.replace('<link rel="stylesheet" href="styles.css">', f'<style>\n{css}\n</style>')
    
    # Replace script to js
    html = html.replace('<script src="app.js"></script>', f'<script>\n{js}\n</script>')
    
    print(f"Writing bundled file to {output_path}...")
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(html)
        
    print("Bundling complete!")

if __name__ == '__main__':
    bundle()
