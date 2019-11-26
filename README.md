# clock
Clock application with FSM pattern

Structure of the Clock
Clock
- Controller
 - FSM
  - IState
  - IdleState
  - AlarmIdleState
  - AlarmActiveState
  - SettingsState
    - Model
        - currTime
        - isAlarmSet
        - alarmTime
    - View
        - stateChangeButton
        - faceChangeButton
        - digitsChangeButton

Life cycle of the clock
[ Idle -> Alarm -> Settings ]
