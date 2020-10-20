var granimInstance = new Granim({
    element: '#home',
    direction: 'diagonal',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#FBAD18', '#f4642a'],
                ['#88c1d3', '#f46626'],
                ['#EA9B1C', '#FBAD18']
            ],
            transitionSpeed: 2000
        }
    }
});