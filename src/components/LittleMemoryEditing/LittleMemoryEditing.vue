<template>
	<div class="layout-padding">

		<h5>LittleMemoryEditing</h5>

		<q-input float-label="Server address:" v-model="serverAddress" />
		<q-btn @click="tryConnectingToServer">Check connection</q-btn>

		<div v-if="isConnected">
			<q-input float-label="Class name:" v-model="className" />
			<q-input float-label="Proc name:" v-model="procName" />
			<q-input float-label="Address in hex but without &H:" v-model="address" />
			<q-input float-label="New value" v-model="newValue" />

			<q-btn @click="checkStatus">Try to find window</q-btn>
			<q-btn @click="testWPM">Test write process memory</q-btn>

			<pre>{{$data}}</pre>
		</div>
		<div v-else>
			<br>
			<p>No connection to server.</p>
		</div>

	</div>
</template>

<script lang="ts" src="./LittleMemoryEditing.ts"></script>

<style scoped>


</style>
