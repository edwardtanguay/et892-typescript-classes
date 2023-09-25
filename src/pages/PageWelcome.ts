export const PageWelcome = () => {

	class House {

		private roofColor: string = '';
		private doorColor: string = '';
		private windowColor: string = '';

		constructor(roofColor: string, doorColor: string, windowColor: string) {
			this.roofColor = roofColor;
			this.doorColor = doorColor;
			this.windowColor = windowColor;
		}

		public getDoorColor(color: string) {
			this.doorColor = color;
		}

		public describe() {
			return `The roof is ${this.roofColor}, the door is ${this.doorColor} and the window is ${this.windowColor}.`;
		}

		static instantiateSimpleHouse(roofColor: string, doorColor: string) {
			return new House(roofColor, doorColor, 'blue');
		}
	}

	const house1 = new House('red', 'orange', 'blue');
	const house2 = new House('blue', 'red', 'blue');
	const house3 = House.instantiateSimpleHouse('red', 'orange');

	return /*html*/`
<div class="page pageWelcome">
	<ul class="list-disc ml-6">
		<li>${house1.describe()}</li>
		<li>${house2.describe()}</li>
		<li>${house3.describe()}</li>
	</ul>
</div>
`;
}