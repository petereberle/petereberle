var granimInstance = new Granim({
    element: '#home',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#FBAD18', '#EA9B1C'],
                ['#FBAD18', '#f46626'],
                ['#EA9B1C', '#FBAD18']
            ],
            transitionSpeed: 4000
        }
    }
});