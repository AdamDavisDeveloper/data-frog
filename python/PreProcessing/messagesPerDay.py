import json
from collections import defaultdict

def read_json(file_path):
    with open(file_path, 'r') as file:
        return json.load(file)

def save_json(data, file_path):
    with open(file_path, 'w') as file:
        json.dump(data, file, indent=4)

def preprocess_data(data):
    count_per_day = defaultdict(lambda: defaultdict(int))
    for entry in data:
        date = entry.get("Date", "").strip("[]")
        sender = entry.get("Sender", "Unknown") 
        count_per_day[date][sender] += 1

    result = []
    for date, senders in count_per_day.items():
        entry = {'date': date}
        entry.update(senders)
        result.append(entry)
    return result

if __name__ == "__main__":
    input_path = 'chat.json'
    output_path = 'chat-edited.json'

    data = read_json(input_path)

    processed_data = preprocess_data(data)

    save_json(processed_data, output_path)
