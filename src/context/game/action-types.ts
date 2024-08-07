export enum GameActionType {
  COUNTDOWN_FINISHED = "COUNTDOWN_FINISHED",
  DROP = "DROP",
  MOVE = "MOVE",
  PAUSE = "PAUSE",
  UNPAUSE = "UNPAUSE",
  RESTART = "RESTART",
  ROTATE = "ROTATE",
  TICK = "TICK",
}

export type GameAction =
  | { type: GameActionType.COUNTDOWN_FINISHED }
  | { type: GameActionType.DROP; payload: boolean }
  | { type: GameActionType.PAUSE }
  | { type: GameActionType.UNPAUSE }
  | { type: GameActionType.RESTART; payload: { initialRows: number } }
  | { type: GameActionType.ROTATE; payload: 1 | -1 }
  | { type: GameActionType.TICK }
  | { type: GameActionType.MOVE; payload: 1 | -1 };
