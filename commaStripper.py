import re

def remove_commas_after_name(input_file, output_file, name):
    with open(input_file, 'r', encoding='utf-8') as file:
        text = file.read()
    regex = rf"(?<=\b{name},).*"
    
    def replace_commas(match):
        return match.group().replace(',', '')
    updated_text = re.sub(regex, replace_commas, text)
    
    with open(output_file, 'w', encoding='utf-8') as file:
        file.write(updated_text)

remove_commas_after_name('_chat.txt', 'chat.txt', 'Adam')
