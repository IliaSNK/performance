import axios from "axios";

export default ({
    name: 'GetPerformance',

    data() {
        return {
            performance: [],
        };
    },

    methods: {
        async getPerformance() {
            const performance = await axios.get('http://192.168.1.98:3000/api/performance/');
            this.performance = performance.data;
        },
        async createPerformance(name, director, actor, duration, pause) {
            const performance = await axios.post('http://192.168.1.98:3000/api/performance/', {
                name,
                director,
                actor,
                duration,
                pause,
            });
            this.performance = performance.data;
        },
        async updatePerformance(name, director, actor, duration, pause) {
            const performance = await axios.put('http://192.168.1.98:3000/api/performance/', {
                name,
                director,
                actor,
                duration,
                pause,
            });
            this.performance = performance.data;
        },
        async deletePerformance(name) {
            const performance = await axios.delete('http://192.168.1.98:3000/api/performance/', {
                data: { name},
            });
            this.performance = performance.data;
        },

    },

    mounted() {
        this.getPerformance();
    },

    render() {
        return this.$scopedSlots.default({
            performance: this.performance,
            createPerformance: this.createPerformance,
            deletePerformance: this.deletePerformance,
            updatePerformance: this.updatePerformance,
        });
    },
})