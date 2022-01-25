
//https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple
export function apiGenerateURL(amount, category, difficulty, type) {
    category += 9; // API begins at 9 instead of 0.
    return "https://opentdb.com/api.php?amount=" + amount
        + "&category=" + category
        + "&difficulty=" + difficulty
        + "&type=" + type;
}
