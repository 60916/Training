<template>
    <div class="activities-container">
        <h2 class="header">Activities</h2>
        <p>Here's where you add activities and set properties for them</p>
        
        <div class="activities-list">
            <div class="activity-item">
                <span>Activity 1</span>
                <div class="button-group">
                    <button class="edit-button">Edit</button>
                    <button class="delete-button">Delete</button>
                </div>
            </div>
            <div class="activity-item">
                <span>Activity 2</span>
                <div class="button-group">
                    <button class="edit-button">Edit</button>
                    <button class="delete-button">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.activities-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.activities-list {
    width: 60%;
}

.activity-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ccc;
    padding: 10px;
    margin: 5px 0;
}

.button-group {
    display: flex;
    gap: 5px;
}

.edit-button, .delete-button {
    padding: 10px 15px;
    cursor: pointer;
}

.edit-button {
    background-color: #4CAF50;
    color: white;
    border: none;
}

.delete-button {
    background-color: #f44336;
    color: white;
    border: none;
}
</style>