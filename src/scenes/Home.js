
// You can write more code here
// import Phaser from "phaser";
/* START OF COMPILED CODE */

class Home extends Phaser.Scene {

	constructor() {
		super("Home");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// button_play
		const button_play = this.add.image(540, 1200, "button-play");
		button_play.setInteractive(new Phaser.Geom.Rectangle(8, -1, 185.6313066701106, 186.53337690068855), Phaser.Geom.Rectangle.Contains);

		this.button_play = button_play;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	button_play;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.button_play.setInteractive();
		this.button_play.on("pointerdown", () => this.scene.start("Level"));
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
