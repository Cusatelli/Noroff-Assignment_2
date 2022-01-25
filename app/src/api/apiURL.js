
//https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple
/**
 * Generate a new API key from opentdb.com with user input values.
 * 
 * Usage:
 * 
 * import { apiGenerateURL } from '../api/apiURL';
 * 
 * apiGenerateURL(5, 0, "medium", "multiple");
 * @param {Number} amount 
 * @param {Number} category 
 * @param {String} difficulty 
 * @param {String} type 
 * @returns API Key as a string value.
 */
export function apiGenerateURL({ numberOfQuestions, category, difficulty, type }) {
    return "https://opentdb.com/api.php?amount=" + numberOfQuestions
        + "&category=" + category
        + "&difficulty=" + difficulty
        + "&type=" + type;
}
