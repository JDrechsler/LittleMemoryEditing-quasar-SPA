<template>
	<div class="layout-padding">

		<h5>LittleMemoryEditing</h5>

		<q-input float-label="Server address:" v-model="serverAddress" />
		<q-btn @click="tryConnectingToServer">Check connection</q-btn>

		<div v-if="isConnected">
			<q-input float-label="Class name:" v-model="className" />

			<q-btn @click="checkStatus">Check status</q-btn>

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
