import { defineStore } from "pinia";
const newActivity = {
    id: 0,
    name: "",
    hasTime: false,
    hasDistance: false,
    distanceUnit: "",
};

export const useActivitiesStore = defineStore("activities", {
    state: () => (activities = []),
    getters: {
        getAll: (state) => state.activities,
        getActivity(id) {
            return this.state.activities.find((itm) => itm.id === id);
        },
        getNew: () => newActivity,
    },
    actions: {
        save(activity) {
            let activities = this.activities.filter(
                (itm) => itm.id !== activity.id
            );
            activities.push(activity);
            this.activities = activities;
        },
        delete(id) {
            this.activities.filter((itm) => itm.id !== id);
        },
    },
});
