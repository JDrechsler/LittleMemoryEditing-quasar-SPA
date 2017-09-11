<template>
	<div id="app">
		<q-layout ref="layout" view="hHh LpR fFf" :left-breakpoint="0">
			<q-toolbar slot="header">
				<q-btn flat @click="$refs.layout.toggleLeft()">
					<q-icon name="menu" />
				</q-btn>
				<q-toolbar-title>
					The Forest
				</q-toolbar-title>
			</q-toolbar>

			<div slot="left">
				<q-list no-border link>
					<q-side-link item to="/littlememoryediting">
						<q-item-side icon="warning" />
						<q-item-main label="Little Memory Editing" />
					</q-side-link>
				</q-list>
			</div>

			<router-view></router-view>
		</q-layout>
	</div>
</template>
