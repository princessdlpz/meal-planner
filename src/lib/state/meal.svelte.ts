import type { MealTimes, SelectedMeal, WeeklyMeals } from '$lib/types/weeklymeals';

let meals = $state<WeeklyMeals>({
    monday: {},
    tuesday: {},
    wednesday: {},
    thursday: {},
    friday: {},
    saturday: {},
    sunday: {}
});

export function mealState() {
	return {
		get meals() {
			return meals;
		},

		set meals(newMeals: WeeklyMeals) {
			meals = newMeals;
		},

		updateMeals: (day: string, mealTime: string, meal: SelectedMeal) => {
			meals[day as keyof WeeklyMeals][mealTime as keyof MealTimes] = meal;
		}
	};
}
