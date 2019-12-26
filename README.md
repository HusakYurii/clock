# clock
Clock application with FSM pattern

Structure of the Clock
Clock
- Controller
  - FSM
    - IState (interface for each state)
    - IdleState (clock is working while in this state)
    - AlarmIdleState (to set alarm time)
    - AlarmActiveState (to activate alarm at the time it was set at)
  
- Model (to store date)
- View (to work with data visualization)

Life cycle of the clock
[ Idle -> (AlarmIdle || AlarmActive) -> Idle ]
