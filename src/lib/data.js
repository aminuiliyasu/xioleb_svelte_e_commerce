import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

// Path to the data.json file (relative to the project root)
const DATA_FILE = join(process.cwd(), 'data.json');

// Read data from the JSON file
export function readData() {
  try {
    const rawData = readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(rawData);
  } catch (error) {
    console.error('Error reading data:', error);
    return { categories: [], products: [] }; // Return empty data on error
  }
}

// Write data to the JSON file
export function writeData(data) {
  try {
    writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (error) {
    console.error('Error writing data:', error);
    return false;
  }
}