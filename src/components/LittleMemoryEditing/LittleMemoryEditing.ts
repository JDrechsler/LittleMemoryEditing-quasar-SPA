import Vue from 'vue'
import Component from 'vue-class-component'
// import { Watch } from 'vue-property-decorator'
import axios from 'axios'

@Component
export default class LittleMemoryEditing extends Vue {

	isConnected: boolean = false
	statusConnection: string = 'ready'
	statusWindowFound: string = 'ready'
	className: string = 'unset'
	windowFound: boolean = false
	serverAddress: string = 'http://192.168.1.4:3000'

	checkStatus() {
		this.statusWindowFound = 'checking windowFound'
		axios.get(`${this.serverAddress}/findWindowStatus?className=${this.className}`)
			.then((response) => {
				console.log(response);
				if (response.statusText == 'OK') {
					if (response.data == 0) {
						this.windowFound = true
					} else {
						this.windowFound = false
					}
				}
				this.statusWindowFound = 'ready'
			})
			.catch(function (error) {
				console.log(error);
			});

	}

	tryConnectingToServer() {
		this.statusConnection = "checking connection"
		axios.get(this.serverAddress)
			.then((response) => {
				console.log(response);

				if (response.statusText == 'OK') {
					this.isConnected = true
				} else {
					this.isConnected = false
				}
				this.statusConnection = "ready"
			})
			.catch((error) => {
				console.log(error);
				this.isConnected = false
				this.statusConnection = "ready"
			});
	}

	mounted() {
		console.log('LME mounted')
		this.tryConnectingToServer()
	}

}
