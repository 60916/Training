import { defineStore } from "pinia";
const newWorkout = {
    id: 0,
    activity: 0,
    date: new Date().toLocaleDateString(),
    time: "00:00",
    distance: 0,
    description: "",
    rpe: 0,
};

export const useWorkoutsStore = defineStore("workouts", {
    state: () => (workouts = []),
    getters: {
        getAll: (state) => state.workouts,
        getWorkout(id) {
            return this.state.workouts.find((itm) => itm.id === id);
        },
        getNew: () => newWorkout,
        workoutCount(activity) {},
        workoutTime(activity) {},
        workoutDistance(activity) {},
        rpeDistribution(activity) {},
    },
    actions: {
        save(Workout) {
            let workouts = this.workouts.filter((itm) => itm.id !== Workout.id);
            workouts.push(Workout);
            workouts.sort((a, b) => {
                return Math.abs(a.id - b.id);
            });
            this.workouts = workouts;
        },
        delete(id) {
            this.workouts.filter((itm) => itm.id !== id);
        },
    },
});
