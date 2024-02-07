
// You can write more code here
// import Phaser from "phaser";
/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// container_border
		const container_border = this.add.container(0, 0);

		// bowling_track
		const bowling_track = this.add.image(540, 1196, "bowling-track");
		bowling_track.scaleX = 2;
		bowling_track.scaleY = 2;

		// container_ball
		const container_ball = this.add.container(0, 0);

		// player
		const player = this.add.sprite(540, 1571, "player_0");

		// container_power
		const container_power = this.add.container(0, 0);
		container_power.visible = false;

		// power_bar_frame
		const power_bar_frame = this.add.image(149, 1247, "power-bar-frame");
		power_bar_frame.scaleX = 1.5;
		power_bar_frame.scaleY = 1.5;
		container_power.add(power_bar_frame);

		// power_bar_bg
		const power_bar_bg = this.add.image(149, 1247, "power-bar-bg");
		power_bar_bg.scaleX = 1.5;
		power_bar_bg.scaleY = 1.5;
		container_power.add(power_bar_bg);

		// power_bar_fill
		const power_bar_fill = this.add.image(149, 1247, "power-bar-fill");
		power_bar_fill.scaleX = 1.5;
		power_bar_fill.scaleY = 1.5;
		container_power.add(power_bar_fill);

		// container_effectArrow
		const container_effectArrow = this.add.container(0, 0);
		container_effectArrow.visible = false;

		// effect_arrow_1
		const effect_arrow_1 = this.add.sprite(991, 1257, "effect-arrow", 0);
		effect_arrow_1.scaleX = 1.5;
		effect_arrow_1.scaleY = 1.5;
		effect_arrow_1.visible = false;
		container_effectArrow.add(effect_arrow_1);

		// effect_arrow_2
		const effect_arrow_2 = this.add.sprite(863, 1257, "effect-arrow", 0);
		effect_arrow_2.scaleX = 1.5;
		effect_arrow_2.scaleY = 1.5;
		effect_arrow_2.flipX = true;
		effect_arrow_2.visible = false;
		container_effectArrow.add(effect_arrow_2);

		// container_arrows
		const container_arrows = this.add.container(0, 0);

		// arrow_left
		const arrow_left = this.add.image(200, 1477, "arrow-left");
		container_arrows.add(arrow_left);

		// arrow_right
		const arrow_right = this.add.image(884, 1477, "arrow-right");
		container_arrows.add(arrow_right);

		// container_bottles
		const container_bottles = this.add.container(0, 0);

		// container_monitor
		const container_monitor = this.add.container(0, 0);

		// monitor
		const monitor = this.add.image(540, 64, "monitor");
		monitor.scaleX = 2;
		monitor.scaleY = 2;
		container_monitor.add(monitor);

		// signal
		const signal = this.add.sprite(548, 200, "signal", 1);
		signal.scaleX = 2;
		signal.scaleY = 2;
		container_monitor.add(signal);

		// monitor_display
		const monitor_display = this.add.sprite(540, 82, "monitor_gutterball_0");
		monitor_display.scaleX = 1.5;
		monitor_display.scaleY = 1.5;
		container_monitor.add(monitor_display);

		this.container_border = container_border;
		this.bowling_track = bowling_track;
		this.container_ball = container_ball;
		this.player = player;
		this.power_bar_fill = power_bar_fill;
		this.container_power = container_power;
		this.effect_arrow_1 = effect_arrow_1;
		this.effect_arrow_2 = effect_arrow_2;
		this.container_effectArrow = container_effectArrow;
		this.container_arrows = container_arrows;
		this.container_bottles = container_bottles;
		this.signal = signal;
		this.monitor_display = monitor_display;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	container_border;
	/** @type {Phaser.GameObjects.Image} */
	bowling_track;
	/** @type {Phaser.GameObjects.Container} */
	container_ball;
	/** @type {Phaser.GameObjects.Sprite} */
	player;
	/** @type {Phaser.GameObjects.Image} */
	power_bar_fill;
	/** @type {Phaser.GameObjects.Container} */
	container_power;
	/** @type {Phaser.GameObjects.Sprite} */
	effect_arrow_1;
	/** @type {Phaser.GameObjects.Sprite} */
	effect_arrow_2;
	/** @type {Phaser.GameObjects.Container} */
	container_effectArrow;
	/** @type {Phaser.GameObjects.Container} */
	container_arrows;
	/** @type {Phaser.GameObjects.Container} */
	container_bottles;
	/** @type {Phaser.GameObjects.Sprite} */
	signal;
	/** @type {Phaser.GameObjects.Sprite} */
	monitor_display;

	/* START-USER-CODE */

	// Write more your code here
	create() {

		this.editorCreate();
		this.nPower = 0;
		this.nSwing = 0;
		this.nChance = 3;
		this.bottleCollided = false;
		this.setBorder();
		this.handleInput();
		this.handleCollision();
		this.setBottle();
		this.container_arrows.list.forEach(arrow => {
			arrow.setInteractive();
			arrow.on("pointerdown", () => this.onArrowClick(arrow));
		});
	}
	setBorder = () => {
		const border_left = this.matter.add.image(166, 947, "power-bar-frame", null, {
			isStatic: true,
			label: "border_left"
		});
		border_left.setScale(5)
		border_left.setAngle(14)
		border_left.setVisible(false);
		this.container_border.add(border_left);
		const border_right = this.matter.add.image(913, 945, "power-bar-frame", null, {
			isStatic: true,
			label: "border_right"
		});
		border_right.setScale(5)
		border_right.setAngle(-14)
		border_right.setVisible(false);
		this.container_border.add(border_right);
		const border_back = this.matter.add.image(537, 276, "monitor_gutterball_0", null, {
			isStatic: true,
			label: "border_back",
			shape: {
				type: 'rectangle',
				width: 1000,
				height: 30,
				flagInternal: true
			}
		});
		border_back.setScale(2, 1);
		this.container_border.add(border_back);
	}
	handleInput = () => {
		this.bowling_track.setInteractive();
		this.bowling_track.on("pointerdown", () => {
			switch (true) {
				case this.container_arrows.visible == true:
					this.handleArrowVisibility();
					return;
				case this.powerBarTween.paused == false:
					this.handlePowerBarPause();
					return;
				case this.powerBarTween.paused == true:
					this.handleBallCreation();
					return;
			}
		});
	}
	handleArrowVisibility = () => {
		this.container_arrows.visible = false;
		this.container_power.visible = true;
		this.setPowerBarAnimation();
	}
	handlePowerBarPause = () => {
		this.container_effectArrow.visible = true;
		this.powerBarTween.paused = true;
		this.powerBarTween.stop();
		this.setEffectArrowAnimation();
		this.nPower = -this.powerBarTween.targets[0].y;
	}
	handleBallCreation = () => {
		this.effect_arrow_1.anims.stop();
		this.effect_arrow_2.anims.stop();
		this.player.anims.play("player-animation", true).once("animationcomplete", () => {
			this.player.anims.stop();
		});
		setTimeout(() => {
			this.signal.setFrame(0);
			this.createBall();
		}, 1800);
		this.bowling_track.disableInteractive();
		if (this.effect_arrow_1.visible == true) {
			this.nSwing = this.effect_arrow_1.anims.currentFrame.index;
			return;
		}
		if (this.effect_arrow_2.visible == true) {
			this.nSwing = -this.effect_arrow_2.anims.currentFrame.index;
			return;
		}
	}
	onArrowClick = (arrow) => {
		if (arrow.texture.key == 'arrow-left' && this.player.x > 290) {
			this.player.x -= 10;
		}
		if (arrow.texture.key == 'arrow-right' && this.player.x < 790) {
			this.player.x += 10;
		}
	}
	setPowerBarAnimation = () => {
		const shape = this.make.graphics();
		shape.fillRect(124, 1467, 49.5, 487.5);
		const mask = shape.createGeometryMask();
		this.power_bar_fill.setMask(mask);
		this.powerBarTween = this.tweens.add({
			targets: shape,
			y: -450,
			duration: 1000,
			ease: 'Linear',
			repeat: -1,
			yoyo: true
		})
	}
	setEffectArrowAnimation = () => {
		this.effect_arrow_2.setVisible(false);
		this.effect_arrow_1.setVisible(true);
		this.effect_arrow_1.anims.play('arrow-animation', true).on('animationcomplete', () => {
			this.effect_arrow_1.setVisible(false);
			this.effect_arrow_2.setVisible(true);
			this.effect_arrow_2.anims.play('arrow-animation', true).on('animationcomplete', () => {
				this.effect_arrow_2.setVisible(false);
				this.effect_arrow_1.setVisible(true);
				this.effect_arrow_1.anims.play('arrow-animation', true);
			});;
		});
	}
	handleCollision = () => {
		this.matter.world.on("collisionstart", (event, bodyA, bodyB) => {
			switch (true) {
				case bodyA.label == "border_back" || bodyB.label == "border_back":
					bodyB.label == "ball"
						? bodyB.gameObject.setVelocity(0)
						: bodyA.gameObject.setVelocity(0);
				case
					((bodyA.label == "border_left" || bodyA.label == "border_right" || bodyA.label == "border_back") && bodyB.label == "ball"):
				case
					((bodyB.label == "border_left" || bodyB.label == "border_right" || bodyB.label == "border_back") && bodyA.label == "ball"):
					this.handlePlatformCollision(bodyA, bodyB);
					return;
				case bodyA.parent.label == "bottle" && bodyB.label == "ball":
				case bodyB.parent.label == "bottle" && bodyA.label == "ball":
					this.handleBottleCollision(bodyA, bodyB);
					return;
			}
		});
	}
	handlePlatformCollision = (bodyA, bodyB) => {
		if (!this.platform) {
			this.platform = this.matter.add.image(540, 900, "power-bar-frame", null, {
				isStatic: true,
				label: "platform",
				shape: {
					type: "fromVertices",
					verts: [
						{ x: 25, y: 0 },
						{ x: 75, y: 0 },
						{ x: 58, y: -200 },
						{ x: 42, y: -200 },
					],
					flagInternal: true,
				},
			});
			this.platform.setVisible(false);
			this.platform.scaleX = 10;
			this.platform.scaleY = 5;
			if (!this.bottleCollided) {
				this.monitor_display.anims.play("gutterball-animation", true);
			}
			setTimeout(() => {
				bodyB.label == "ball"
					? this.setPinBinderAnimation(bodyB.gameObject)
					: this.setPinBinderAnimation(bodyA.gameObject);
			}, 4000);
		}
	}
	handleBottleCollision = (bodyA, bodyB) => {
		bodyB.label == "ball"
			? this.setBottlefallAnimation(bodyB.gameObject)
			: this.setBottlefallAnimation(bodyA.gameObject);
		setTimeout(() => {
			bodyB.label == "ball"
				? this.setPinBinderAnimation(bodyB.gameObject)
				: this.setPinBinderAnimation(bodyA.gameObject);
		}, 2000);
	}
	setPinBinderAnimation = (ball) => {
		ball.destroy();
		const pin_binder = this.add.sprite(538, 350, "pin-binder", 0);
		pin_binder.setScale(2);
		pin_binder.anims.play("pinBinder-animation", true).once("animationcomplete", () => {
			this.handlePinBinderAnimationComplete(pin_binder);
		});
		setTimeout(() => {
			this.handleBottleTimeout();
		}, 1000);
	}
	handlePinBinderAnimationComplete = (pin_binder) => {
		switch (true) {
			case this.nChance > 1:
				this.nChance--;
				this.bottleCollided = false;
				pin_binder.anims.stop();
				pin_binder.destroy();
				this.player.setTexture("player_0");
				if (this.platform) {
					this.platform.destroy();
				}
				this.platform = undefined;
				this.signal.setFrame(1);
				this.container_power.visible = false;
				this.container_arrows.visible = true;
				this.container_effectArrow.visible = false;
				this.bowling_track.setInteractive();
				return;
			case this.nChance <= 1:
				setTimeout(() => {
					this.scene.stop();
					this.scene.start("Home");
				}, 1000);
			default:
				return;
		}
	}
	handleBottleTimeout = () => {
		this.container_bottles.list.forEach((bottle) => {
			if (bottle.name != "falledBottle") {
				this.tweens.add({
					targets: bottle,
					y: "-=200",
					duration: 1200,
					ease: "Linear",
					yoyo: true,
					onComplete: () => {
						bottle.body.label = "bottle";
					}
				});
			}
			if (bottle.name == "falledBottle") {
				this.tweens.add({
					targets: bottle,
					y: 300,
					alpha: 0,
					duration: 1000,
					ease: "Linear",
					onComplete: () => {
						bottle.destroy();
					},
				});
			}
		});
	}
	setBottle = () => {
		const rowWidth = 4;
		for (let i = 0; i < 4; i++) {
			const xOffset = (rowWidth + (4 - i)) * 25;
			for (let j = 0; j < 4 - i; j++) {
				const bottle = this.matter.add.sprite(670 + j * 45 - xOffset, 310 + i * 15, "bottle", 0, {
					shape: this.cache.json.get('bottle_body').bottle,
					label: "bottle",
				});
				bottle.setScale(2);
				this.container_bottles.add(bottle);
				bottle.setDepth(j);
			}
		}
	}
	createBall = () => {
		const nVelocityX = this.nSwing * 0.1;
		const nVelocityY = this.findVelocity();
		const ball = this.matter.add.sprite(this.player.x + 64, this.player.y - 200, "ball", null, {
			shape: "circle",
			restitution: 1,
			density: 1,
			friction: 0.2,
			label: "ball",
		}
		);
		this.container_ball.add(ball);
		ball.setVelocity(-2, -nVelocityY);
		setTimeout(() => {
			ball.setVelocityX(nVelocityX);
		}, 300);
		ball.body.ignoreGravity = true;
		this.updateBallSize(ball);
	};
	findVelocity = () => {
		switch (true) {
			case this.nPower > 0 && this.nPower <= 100:
				return 12;
			case this.nPower > 100 && this.nPower <= 200:
				return 14;
			case this.nPower > 200 && this.nPower <= 300:
				return 16;
			case this.nPower > 300:
				return 18;
			default:
				return 2;
		}
	};
	updateBallSize = (ball) => {
		this.ballInterval = setInterval(() => {
			ball.y < 900 && ball.y > 500
				? ball.setScale(0.1 + ball.y / 1000)
				: ball.y < 400 && clearInterval(this.ballInterval);
		}, 100);
	};
	setBottlefallAnimation = (ball) => {
		ball.body.frictionAir = 0.1;
		this.bottleCollided = true;
		this.checkForBottleCollision(ball);
		const allBottlesFalled = this.container_bottles.list.every(bottle => bottle.name === "falledBottle");
		if (allBottlesFalled) {
			this.monitor_display.anims.play("strike-animation", true);
			this.nChance = 1;
		}
	}
	checkForBottleCollision = (ball) => {
		for (const bottle of this.container_bottles.list) {
			bottle.body.label = "collided_bottle";
			let nRandomCount = Phaser.Math.Between(1, 8);
			if (ball.x > 440 && ball.x < 480 && bottle.x < 515) {
				bottle.anims.play(`bottle-animation-${nRandomCount}`, true);
				bottle.setName("falledBottle");
			}
			if (ball.x > 480 && ball.x <= 490 && bottle.x < 530) {
				bottle.anims.play(`bottle-animation-${nRandomCount}`, true);
				bottle.setName("falledBottle");
			}
			if (ball.x > 490 && ball.x <= 525 && bottle.x < 555) {
				bottle.anims.play(`bottle-animation-${nRandomCount}`, true);
				bottle.setName("falledBottle");
			}
			if (ball.x > 525 && ball.x <= 560) {
				bottle.anims.play(`bottle-animation-${nRandomCount}`, true);
				bottle.setName("falledBottle");
			}
			if (ball.x > 560 && ball.x <= 590 && bottle.x > 540 && bottle.x <= 625) {
				bottle.anims.play(`bottle-animation-${nRandomCount}`, true);
				bottle.setName("falledBottle");
			}
			if (ball.x > 590 && ball.x <= 645 && bottle.x > 560) {
				bottle.anims.play(`bottle-animation-${nRandomCount}`, true);
				bottle.setName("falledBottle");
			}
		}
		// ball.destroy();
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
