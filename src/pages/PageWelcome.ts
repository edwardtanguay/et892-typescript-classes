export const PageWelcome = () => {

	class House {

		public roofColor: string = '';
		public doorColor: string = '';
		public windowColor: string = '';

		constructor(roofColor: string, doorColor: string, windowColor: string) {
			this.roofColor = roofColor;
			this.doorColor = doorColor;
			this.windowColor = windowColor;
		}

		describe() {
			return `The roof is ${this.roofColor}, the door is ${this.doorColor} and the window is ${this.windowColor}.`;
		}
	}

	const house1 = new House('red', 'orange', 'blue');
	const house2 = new House('blue', 'red', 'blue');

	return /*html*/`
<div class="page pageWelcome">
	<ul>
		<li>${house1.describe()}</li>
	</ul>
</div>
`;
}