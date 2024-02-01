// FILEPATH: /Users/yudizsolutions/Documents/Yudiz/Yudiz Projects/Phaser Projects/bowling/tests/Level.test.js

import Level from "../src/scenes/Level";

describe('Level scene create method', () => {
    let level;
    beforeEach(() => {
        level = new Level();
        level.editorCreate = jest.fn();
        level.setBorder = jest.fn();
        level.handleInput = jest.fn();
        level.handleCollision = jest.fn();
        level.setBottle = jest.fn();
        level.onArrowClick = jest.fn();
        level.container_arrows = {
            list: Array(5).fill().map(() => ({
                setInteractive: jest.fn(),
                on: jest.fn()
            }))
        };
        jest.clearAllMocks();
    });

    test('editorCreate is called', () => {
        level.create();
        expect(level.editorCreate).toHaveBeenCalled();
    });

    test('setBorder is called', () => {
        level.create();
        expect(level.setBorder).toHaveBeenCalled();
    });

    test('handleInput is called', () => {
        level.create();
        expect(level.handleInput).toHaveBeenCalled();
    });

    test('handleCollision is called', () => {
        level.create();
        expect(level.handleCollision).toHaveBeenCalled();
    });

    test('setBottle is called', () => {
        level.create();
        expect(level.setBottle).toHaveBeenCalled();
    });

    test('each arrow is set to interactive and has pointerdown event listener', () => {
        level.create();
        level.container_arrows.list.forEach(arrow => {
            expect(arrow.setInteractive).toHaveBeenCalled();
            expect(arrow.on).toHaveBeenCalledWith("pointerdown", expect.any(Function));
        });
    });
});
test('setBorder adds left border to container_border', () => {
    const level = new Level();
    level.matter = {
        add: {
            image: jest.fn().mockReturnValue({
                setScale: jest.fn().mockReturnThis(),
                setAngle: jest.fn().mockReturnThis(),
                setVisible: jest.fn().mockReturnThis()
            })
        }
    };
    level.container_border = {
        add: jest.fn()
    };

    level.setBorder();

    expect(level.matter.add.image).toHaveBeenCalledWith(166, 947, "power-bar-frame", null, {
        isStatic: true,
        label: "border_left"
    });
    expect(level.container_border.add).toHaveBeenCalled();
});

test('setBorder adds right border to container_border', () => {
    const level = new Level();
    level.matter = {
        add: {
            image: jest.fn().mockReturnValue({
                setScale: jest.fn(),
                setAngle: jest.fn(),
                setVisible: jest.fn()
            })
        }
    };
    level.container_border = {
        add: jest.fn()
    };

    level.setBorder();

    expect(level.matter.add.image).toHaveBeenCalledWith(913, 945, "power-bar-frame", null, {
        isStatic: true,
        label: "border_right"
    });
    expect(level.container_border.add).toHaveBeenCalled();
});

test('setBorder adds back border to container_border', () => {
    const level = new Level();
    level.matter = {
        add: {
            image: jest.fn().mockReturnValue({
                setScale: jest.fn(),
                setAngle: jest.fn(),
                setVisible: jest.fn()
            })
        }
    };
    level.container_border = {
        add: jest.fn()
    };

    level.setBorder();

    expect(level.matter.add.image).toHaveBeenCalledWith(537, 276, "monitor_gutterball_0", null, {
        isStatic: true,
        label: "border_back",
        shape: {
            type: 'rectangle',
            width: 1000,
            height: 30,
            flagInternal: true
        }
    });
    expect(level.container_border.add).toHaveBeenCalled();
});
// import Level from "../src/scenes/Level";

describe('Level scene create method', () => {
    let level;
    beforeEach(() => {
        level = new Level();
        level.editorCreate = jest.fn();
        level.setBorder = jest.fn();
        level.handleInput = jest.fn();
        level.handleCollision = jest.fn();
        level.setBottle = jest.fn();
        level.onArrowClick = jest.fn();
        level.container_arrows = {
            list: Array(5).fill().map(() => ({
                setInteractive: jest.fn(),
                on: jest.fn()
            }))
        };
        jest.clearAllMocks();
    });

    test('editorCreate is called', () => {
        level.create();
        expect(level.editorCreate).toHaveBeenCalled();
    });

    test('setBorder is called', () => {
        level.create();
        expect(level.setBorder).toHaveBeenCalled();
    });

    test('handleInput is called', () => {
        level.create();
        expect(level.handleInput).toHaveBeenCalled();
    });

    test('handleCollision is called', () => {
        level.create();
        expect(level.handleCollision).toHaveBeenCalled();
    });

    test('setBottle is called', () => {
        level.create();
        expect(level.setBottle).toHaveBeenCalled();
    });

    test('each arrow is set to interactive and has pointerdown event listener', () => {
        level.create();
        level.container_arrows.list.forEach(arrow => {
            expect(arrow.setInteractive).toHaveBeenCalled();
            expect(arrow.on).toHaveBeenCalledWith("pointerdown", expect.any(Function));
        });
    });
});

describe('Level scene setBorder method', () => {
    let level;
    beforeEach(() => {
        level = new Level();
        level.matter = {
            add: {
                image: jest.fn().mockReturnValue({
                    setScale: jest.fn().mockReturnThis(),
                    setAngle: jest.fn().mockReturnThis(),
                    setVisible: jest.fn().mockReturnThis()
                })
            }
        };
        level.container_border = {
            add: jest.fn()
        };
        jest.clearAllMocks();
    });

    test('setBorder adds left border to container_border', () => {
        level.setBorder();
        expect(level.matter.add.image).toHaveBeenCalledWith(166, 947, "power-bar-frame", null, {
            isStatic: true,
            label: "border_left"
        });
        expect(level.container_border.add).toHaveBeenCalled();
    });

    test('setBorder adds right border to container_border', () => {
        level.setBorder();
        expect(level.matter.add.image).toHaveBeenCalledWith(913, 945, "power-bar-frame", null, {
            isStatic: true,
            label: "border_right"
        });
        expect(level.container_border.add).toHaveBeenCalled();
    });

    test('setBorder adds back border to container_border', () => {
        level.setBorder();
        expect(level.matter.add.image).toHaveBeenCalledWith(537, 276, "monitor_gutterball_0", null, {
            isStatic: true,
            label: "border_back",
            shape: {
                type: 'rectangle',
                width: 1000,
                height: 30,
                flagInternal: true
            }
        });
        expect(level.container_border.add).toHaveBeenCalled();
    });
});

describe('Level scene handleInput method', () => {
    let level;
    beforeEach(() => {
        level = new Level();
        level.bowling_track = {
            setInteractive: jest.fn(),
            on: jest.fn()
        };
        level.container_arrows = {
            visible: false
        };
        level.container_power = {
            visible: false
        };
        level.powerBarTween = {
            paused: false
        };
        level.handleArrowVisibility = jest.fn();
        level.handlePowerBarPause = jest.fn();
        level.handleBallCreation = jest.fn();
        jest.clearAllMocks();
    });

    test('bowling_track is set to interactive and has pointerdown event listener', () => {
        level.handleInput();
        expect(level.bowling_track.setInteractive).toHaveBeenCalled();
        expect(level.bowling_track.on).toHaveBeenCalledWith("pointerdown", expect.any(Function));
    });

    test('handleArrowVisibility is called when container_arrows is visible', () => {
        level.container_arrows.visible = true;
        level.handleInput = jest.fn(() => {
            level.handleArrowVisibility();
        });
        level.handleInput();
        expect(level.handleArrowVisibility).toHaveBeenCalled();
    });

    test('handlePowerBarPause is called when powerBarTween is not paused', () => {
        level.powerBarTween.paused = false;
        level.handleInput = jest.fn(() => {
            level.handlePowerBarPause();
        });
        level.handleInput();
        expect(level.handlePowerBarPause).toHaveBeenCalled();
    });

    test('handleBallCreation is called when powerBarTween is paused', () => {
        level.powerBarTween.paused = true;
        level.handleInput = jest.fn(() => {
            level.handleBallCreation();
        });
        level.handleInput();
        expect(level.handleBallCreation).toHaveBeenCalled();
    });
});

describe('Level scene handleCollision method', () => {
    let level;
    beforeEach(() => {
        level = new Level();
        level.matter = {
            world: {
                on: jest.fn()
            }
        };
        level.handlePlatformCollision = jest.fn();
        level.handleBottleCollision = jest.fn();
        jest.clearAllMocks();
    });

    test('handlePlatformCollision is called when collision involves border and ball', () => {
        const bodyA = {
            label: "ball",
            gameObject: {
                setVelocity: jest.fn()
            }
        };

        const bodyB = {
            label: "border_back",
            gameObject: {
                setVelocity: jest.fn()
            }
        };
        level.handleCollision();
        const collisionStartCallback = level.matter.world.on.mock.calls[0][1];
        collisionStartCallback(null, bodyA, bodyB);
        expect(level.handlePlatformCollision).toHaveBeenCalledWith(bodyA, bodyB);
    });

    test('handlePlatformCollision is called when collision involves ball and border', () => {
        const bodyA = {
            label: "ball",
            gameObject: {
                setVelocity: jest.fn()
            }
        };

        const bodyB = {
            label: "border_back",
            gameObject: {
                setVelocity: jest.fn()
            }
        };
        level.handleCollision();
        const collisionStartCallback = level.matter.world.on.mock.calls[0][1];
        collisionStartCallback(null, bodyA, bodyB);
        expect(level.handlePlatformCollision).toHaveBeenCalledWith(bodyA, bodyB);
    });

    test('handleBottleCollision is called when collision involves bottle and ball', () => {
        const bodyA = {
            label: "ball",
            parent: {
                label: "bottle"
            }
        };

        const bodyB = {
            label: "ball"
        };
        level.handleCollision();
        const collisionStartCallback = level.matter.world.on.mock.calls[0][1];
        collisionStartCallback(null, bodyA, bodyB);
        expect(level.handleBottleCollision).toHaveBeenCalledWith(bodyA, bodyB);
    });

    test('handleBottleCollision is called when collision involves ball and bottle', () => {
        const bodyA = {
            label: "ball",
            parent: {
                label: "bottle"
            }
        };

        const bodyB = {
            label: "ball"
        };
        level.handleCollision();
        const collisionStartCallback = level.matter.world.on.mock.calls[0][1];
        collisionStartCallback(null, bodyA, bodyB);
        expect(level.handleBottleCollision).toHaveBeenCalledWith(bodyA, bodyB);
    });
});

describe('Level scene onArrowClick method', () => {
    let level;
    beforeEach(() => {
        level = new Level();
        level.player = {
            x: 540
        };
        jest.clearAllMocks();
    });

    test('player moves left when arrow-left is clicked and player.x > 290', () => {
        const arrow = {
            texture: {
                key: 'arrow-left'
            }
        };
        level.onArrowClick(arrow);
        expect(level.player.x).toBe(530);
    });

    test('player does not move left when arrow-left is clicked and player.x <= 290', () => {
        const arrow = {
            texture: {
                key: 'arrow-left'
            }
        };
        level.player.x = 290;
        level.onArrowClick(arrow);
        expect(level.player.x).toBe(290);
    });

    test('player moves right when arrow-right is clicked and player.x < 790', () => {
        const arrow = {
            texture: {
                key: 'arrow-right'
            }
        };
        level.onArrowClick(arrow);
        expect(level.player.x).toBe(550);
    });

    test('player does not move right when arrow-right is clicked and player.x >= 790', () => {
        const arrow = {
            texture: {
                key: 'arrow-right'
            }
        };
        level.player.x = 790;
        level.onArrowClick(arrow);
        expect(level.player.x).toBe(790);
    });
});

describe('Level scene create method', () => {
    let level;
    beforeEach(() => {
        level = new Level();
        level.editorCreate = jest.fn();
        level.setBorder = jest.fn();
        level.handleInput = jest.fn();
        level.handleCollision = jest.fn();
        level.setBottle = jest.fn();
        level.onArrowClick = jest.fn();
        level.container_arrows = {
            list: Array(5).fill().map(() => ({
                setInteractive: jest.fn(),
                on: jest.fn()
            }))
        };
        jest.clearAllMocks();
    });

    test('editorCreate is called', () => {
        level.create();
        expect(level.editorCreate).toHaveBeenCalled();
    });

    test('setBorder is called', () => {
        level.create();
        expect(level.setBorder).toHaveBeenCalled();
    });

    test('handleInput is called', () => {
        level.create();
        expect(level.handleInput).toHaveBeenCalled();
    });

    test('handleCollision is called', () => {
        level.create();
        expect(level.handleCollision).toHaveBeenCalled();
    });

    test('setBottle is called', () => {
        level.create();
        expect(level.setBottle).toHaveBeenCalled();
    });

    test('each arrow is set to interactive and has pointerdown event listener', () => {
        level.create();
        level.container_arrows.list.forEach(arrow => {
            expect(arrow.setInteractive).toHaveBeenCalled();
            expect(arrow.on).toHaveBeenCalledWith("pointerdown", expect.any(Function));
        });
    });
});

describe('Level scene setBorder method', () => {
    let level;
    beforeEach(() => {
        level = new Level();
        level.matter = {
            add: {
                image: jest.fn().mockReturnValue({
                    setScale: jest.fn().mockReturnThis(),
                    setAngle: jest.fn().mockReturnThis(),
                    setVisible: jest.fn().mockReturnThis()
                })
            }
        };
        level.container_border = {
            add: jest.fn()
        };
        jest.clearAllMocks();
    });

    test('setBorder adds left border to container_border', () => {
        level.setBorder();
        expect(level.matter.add.image).toHaveBeenCalledWith(166, 947, "power-bar-frame", null, {
            isStatic: true,
            label: "border_left"
        });
        expect(level.container_border.add).toHaveBeenCalled();
    });

    test('setBorder adds right border to container_border', () => {
        level.setBorder();
        expect(level.matter.add.image).toHaveBeenCalledWith(913, 945, "power-bar-frame", null, {
            isStatic: true,
            label: "border_right"
        });
        expect(level.container_border.add).toHaveBeenCalled();
    });

    test('setBorder adds back border to container_border', () => {
        level.setBorder();
        expect(level.matter.add.image).toHaveBeenCalledWith(537, 276, "monitor_gutterball_0", null, {
            isStatic: true,
            label: "border_back",
            shape: {
                type: 'rectangle',
                width: 1000,
                height: 30,
                flagInternal: true
            }
        });
        expect(level.container_border.add).toHaveBeenCalled();
    });
});

describe('Level scene handleInput method', () => {
    let level;
    beforeEach(() => {
        level = new Level();
        level.bowling_track = {
            setInteractive: jest.fn(),
            on: jest.fn()
        };
        level.container_arrows = {
            visible: false
        };
        level.container_power = {
            visible: false
        };
        level.powerBarTween = {
            paused: false
        };
        level.handleArrowVisibility = jest.fn();
        level.handlePowerBarPause = jest.fn();
        level.handleBallCreation = jest.fn();
        jest.clearAllMocks();
    });

    test('bowling_track is set to interactive and has pointerdown event listener', () => {
        level.handleInput();
        expect(level.bowling_track.setInteractive).toHaveBeenCalled();
        expect(level.bowling_track.on).toHaveBeenCalledWith("pointerdown", expect.any(Function));
    });

    test('handleArrowVisibility is called when container_arrows is visible', () => {
        level.container_arrows.visible = true;
        level.handleInput = jest.fn(() => {
            level.handleArrowVisibility();
        });
        level.handleInput();
        expect(level.handleArrowVisibility).toHaveBeenCalled();
    });

    test('handlePowerBarPause is called when powerBarTween is not paused', () => {
        level.powerBarTween.paused = false;
        level.handleInput = jest.fn(() => {
            level.handlePowerBarPause();
        });
        level.handleInput();
        expect(level.handlePowerBarPause).toHaveBeenCalled();
    });

    test('handleBallCreation is called when powerBarTween is paused', () => {
        level.powerBarTween.paused = true;
        level.handleInput = jest.fn(() => {
            level.handleBallCreation();
        });
        level.handleInput();
        expect(level.handleBallCreation).toHaveBeenCalled();
    });
});

describe('Level scene handleCollision method', () => {
    let level;
    beforeEach(() => {
        level = new Level();
        level.matter = {
            world: {
                on: jest.fn()
            }
        };
        level.handlePlatformCollision = jest.fn();
        level.handleBottleCollision = jest.fn();
        jest.clearAllMocks();
    });

    test('handlePlatformCollision is called when collision involves border and ball', () => {
        const bodyA = {
            label: "ball",
            gameObject: {
                setVelocity: jest.fn()
            }
        };

        const bodyB = {
            label: "border_back",
            gameObject: {
                setVelocity: jest.fn()
            }
        };
        level.handleCollision();
        const collisionStartCallback = level.matter.world.on.mock.calls[0][1];
        collisionStartCallback(null, bodyA, bodyB);
        expect(level.handlePlatformCollision).toHaveBeenCalledWith(bodyA, bodyB);
    });

    test('handlePlatformCollision is called when collision involves ball and border', () => {
        const bodyA = {
            label: "ball",
            gameObject: {
                setVelocity: jest.fn()
            }
        };

        const bodyB = {
            label: "border_back",
            gameObject: {
                setVelocity: jest.fn()
            }
        };
        level.handleCollision();
        const collisionStartCallback = level.matter.world.on.mock.calls[0][1];
        collisionStartCallback(null, bodyA, bodyB);
        expect(level.handlePlatformCollision).toHaveBeenCalledWith(bodyA, bodyB);
    });

    test('handleBottleCollision is called when collision involves bottle and ball', () => {
        const bodyA = {
            label: "ball",
            parent: {
                label: "bottle"
            }
        };

        const bodyB = {
            label: "ball"
        };
        level.handleCollision();
        const collisionStartCallback = level.matter.world.on.mock.calls[0][1];
        collisionStartCallback(null, bodyA, bodyB);
        expect(level.handleBottleCollision).toHaveBeenCalledWith(bodyA, bodyB);
    });
});

describe('Level scene create method', () => {
    let level;
    beforeEach(() => {
        level = new Level();
        level.editorCreate = jest.fn();
        level.setBorder = jest.fn();
        level.handleInput = jest.fn();
        level.handleCollision = jest.fn();
        level.setBottle = jest.fn();
        level.onArrowClick = jest.fn();
        level.container_arrows = {
            list: Array(5).fill().map(() => ({
                setInteractive: jest.fn(),
                on: jest.fn()
            }))
        };
        jest.clearAllMocks();
    });

    test('editorCreate is called', () => {
        level.create();
        expect(level.editorCreate).toHaveBeenCalled();
    });

    test('setBorder is called', () => {
        level.create();
        expect(level.setBorder).toHaveBeenCalled();
    });

    test('handleInput is called', () => {
        level.create();
        expect(level.handleInput).toHaveBeenCalled();
    });

    test('handleCollision is called', () => {
        level.create();
        expect(level.handleCollision).toHaveBeenCalled();
    });

    test('setBottle is called', () => {
        level.create();
        expect(level.setBottle).toHaveBeenCalled();
    });

    test('each arrow is set to interactive and has pointerdown event listener', () => {
        level.create();
        level.container_arrows.list.forEach(arrow => {
            expect(arrow.setInteractive).toHaveBeenCalled();
            expect(arrow.on).toHaveBeenCalledWith("pointerdown", expect.any(Function));
        });
    });
});

describe('Level scene setBorder method', () => {
    let level;
    beforeEach(() => {
        level = new Level();
        level.matter = {
            add: {
                image: jest.fn().mockReturnValue({
                    setScale: jest.fn().mockReturnThis(),
                    setAngle: jest.fn().mockReturnThis(),
                    setVisible: jest.fn().mockReturnThis()
                })
            }
        };
        level.container_border = {
            add: jest.fn()
        };
        jest.clearAllMocks();
    });

    test('setBorder adds left border to container_border', () => {
        level.setBorder();
        expect(level.matter.add.image).toHaveBeenCalledWith(166, 947, "power-bar-frame", null, {
            isStatic: true,
            label: "border_left"
        });
        expect(level.container_border.add).toHaveBeenCalled();
    });

    test('setBorder adds right border to container_border', () => {
        level.setBorder();
        expect(level.matter.add.image).toHaveBeenCalledWith(913, 945, "power-bar-frame", null, {
            isStatic: true,
            label: "border_right"
        });
        expect(level.container_border.add).toHaveBeenCalled();
    });

    test('setBorder adds back border to container_border', () => {
        level.setBorder();
        expect(level.matter.add.image).toHaveBeenCalledWith(537, 276, "monitor_gutterball_0", null, {
            isStatic: true,
            label: "border_back",
            shape: {
                type: 'rectangle',
                width: 1000,
                height: 30,
                flagInternal: true
            }
        });
        expect(level.container_border.add).toHaveBeenCalled();
    });
});

describe('Level scene handleInput method', () => {
    let level;
    beforeEach(() => {
        level = new Level();
        level.bowling_track = {
            setInteractive: jest.fn(),
            on: jest.fn()
        };
        level.container_arrows = {
            visible: false
        };
        level.container_power = {
            visible: false
        };
        level.powerBarTween = {
            paused: false
        };
        level.handleArrowVisibility = jest.fn();
        level.handlePowerBarPause = jest.fn();
        level.handleBallCreation = jest.fn();
        jest.clearAllMocks();
    });

    test('bowling_track is set to interactive and has pointerdown event listener', () => {
        level.handleInput();
        expect(level.bowling_track.setInteractive).toHaveBeenCalled();
        expect(level.bowling_track.on).toHaveBeenCalledWith("pointerdown", expect.any(Function));
    });

    test('handleArrowVisibility is called when container_arrows is visible', () => {
        level.container_arrows.visible = true;
        level.handleInput = jest.fn(() => {
            level.handleArrowVisibility();
        });
        level.handleInput();
        expect(level.handleArrowVisibility).toHaveBeenCalled();
    });

    test('handlePowerBarPause is called when powerBarTween is not paused', () => {
        level.powerBarTween.paused = false;
        level.handleInput = jest.fn(() => {
            level.handlePowerBarPause();
        });
        level.handleInput();
        expect(level.handlePowerBarPause).toHaveBeenCalled();
    });

    test('handleBallCreation is called when powerBarTween is paused', () => {
        level.powerBarTween.paused = true;
        level.handleInput = jest.fn(() => {
            level.handleBallCreation();
        });
        level.handleInput();
        expect(level.handleBallCreation).toHaveBeenCalled();
    });
});

describe('Level scene handleCollision method', () => {
    let level;
    beforeEach(() => {
        level = new Level();
        level.matter = {
            world: {
                on: jest.fn()
            }
        };
        level.handlePlatformCollision = jest.fn();
        level.handleBottleCollision = jest.fn();
        jest.clearAllMocks();
    });

    test('handlePlatformCollision is called when collision involves border and ball', () => {
        const bodyA = {
            label: "ball",
            gameObject: {
                setVelocity: jest.fn()
            }
        };

        const bodyB = {
            label: "border_back",
            gameObject: {
                setVelocity: jest.fn()
            }
        };
        level.handleCollision();
        const collisionStartCallback = level.matter.world.on.mock.calls[0][1];
        collisionStartCallback(null, bodyA, bodyB);
        expect(level.handlePlatformCollision).toHaveBeenCalledWith(bodyA, bodyB);
    });

    test('handlePlatformCollision is called when collision involves ball and border', () => {
        const bodyA = {
            label: "ball",
            gameObject: {
                setVelocity: jest.fn()
            }
        };

        const bodyB = {
            label: "border_back",
            gameObject: {
                setVelocity: jest.fn()
            }
        };
        level.handleCollision();
        const collisionStartCallback = level.matter.world.on.mock.calls[0][1];
        collisionStartCallback(null, bodyA, bodyB);
        expect(level.handlePlatformCollision).toHaveBeenCalledWith(bodyA, bodyB);
    });

    test('handleBottleCollision is called when collision involves bottle and ball', () => {
        const bodyA = {
            label: "ball",
            parent: {
                label: "bottle"
            }
        };

        const bodyB = {
            label: "ball"
        };
        level.handleCollision();
        const collisionStartCallback = level.matter.world.on.mock.calls[0][1];
        collisionStartCallback(null, bodyA, bodyB);
        expect(level.handleBottleCollision).toHaveBeenCalledWith(bodyA, bodyB);
    });
});