export type WeeklyMeals = {
    monday:MealTimes
    tuesday:MealTimes
    wednesday:MealTimes
    thursday:MealTimes
    friday:MealTimes
    saturday:MealTimes
    sunday:MealTimes
}

export type MealTimes = {
    breakfast?: SelectedMeal 
    lunch?: SelectedMeal
    dinner?: SelectedMeal
}

export type SelectedMeal = {
    idMeal: string
    strMeal: string
    strMealThumb: string
    category: string
}
