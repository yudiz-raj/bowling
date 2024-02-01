import Home from "../src/scenes/Home";

describe('Home scene create method', () => {
    let home;
    beforeEach(() => {
        home = new Home();
        home.scene = {
            start: jest.fn()
        };
        home.add = {
            image: jest.fn().mockReturnValue({
                setInteractive: jest.fn(),
                on: jest.fn()
            }),
        };
        home.events = {
            emit: jest.fn()
        };
        home.button_play = home.add.image();
        jest.clearAllMocks();
    });

    test('button_play calls scene.start with "Level" on pointerdown event', () => {
        const mockFn = jest.fn();
        home.button_play.on.mockImplementation((event, callback) => {
            if (event === "pointerdown") {
                callback();
            }
        });
        home.scene.start = mockFn;
        home.create();
        expect(mockFn).toHaveBeenCalledWith("Level");
    });
    test('button_play is set to interactive', () => {
        home.create();
        expect(home.button_play.setInteractive).toHaveBeenCalled();
    });
    test('button_play has pointerdown event listener', () => {
        home.create();
        expect(home.button_play.on).toHaveBeenCalledWith("pointerdown", expect.any(Function));
    });
});