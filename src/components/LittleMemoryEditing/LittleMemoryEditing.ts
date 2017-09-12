import Vue from 'vue'
import Component from 'vue-class-component'
// import { Watch } from 'vue-property-decorator'
import axios from 'axios'

@Component
export default class LittleMemoryEditing extends Vue {

	isConnected: boolean = false
	statusConnection: string = 'ready'
	statusWindowFound: string = 'ready'
	statusWPM: string = 'ready'
	className: string = 'className'
	procName: string = 'Tutorial-x86_64'
	address: string = '015427B0'
	newValue: number = 200
	windowFound: boolean = false
	serverAddress: string = 'http://192.168.44.149:3000'

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
			.catch((error) => {
				console.log(error)
				this.statusWindowFound = 'ready'
			});

	}

	testWPM() {
		this.statusWPM = 'executing wpm'
		axios.get(`${this.serverAddress}/writeProcessMemory?procName=${this.procName}&address=${this.address}&newValue=${this.newValue}`)
			.then((response) => {
				console.log(response);
				if (response.statusText == 'OK') {
					if (response.data == 0) {
						console.log("WPM executed successfully.")
					} else {
						console.log("An error happened executing WPM, please check server console for more information.")
					}
				}
				this.statusWPM = 'ready'
			})
			.catch((error) => {
				console.log(error);
				this.statusWPM = 'ready'
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
