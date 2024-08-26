

const rightClickHook = {
    // This function runs when the element has been added to the DOM and its server LiveView has finished mounting
    mounted() {
        this.el.addEventListener("contextmenu", (event) => {
            event.preventDefault(); // Empêche le menu contextuel par défaut

            let payload = {
                x: event.clientX,
                y: event.clientY,
                element_id: this.el.id,
                additional_data: "any_other_data" // Vous pouvez ajouter d'autres informations ici
            };

            this.pushEvent("right-click", payload); // Envoie l'événement "right-click" au backend
        });
    },

    // This function runs when the element is about to be updated in the DOM. Note: any call here must be synchronous as the operation cannot be deferred or cancelled.
    beforeUpdate() { },

    // This function runs when the element has been updated in the DOM by the server
    updated() { },

    // This function runs when the element has been removed from the page, either by a parent update, or by the parent being removed entirely
    destroyed() { },

    // This function runs when the element's parent LiveView has disconnected from the server
    disconnected() { },

    // This function runs when the element's parent LiveView has reconnected to the server
    reconnected() { },
};

export default rightClickHook;
