# CalendayAngulembre19

I'm Andrey Karpovich and this is my demo Angular app  with drag&drop calendar events style.

# Implemented features: 

- Angular 19 new style excluding Signals api (accent on "good old" RxJS)
- Angular Material + angular/cdk for main events area
- lazy-loading of all components including event-modal implemented + dynamic routing
- a possibility to delete and edit event (rename or change duration)
- integrated InMemoryDbService + api in order to demonstrate a mimic of http requests and make rxjs more visible, logic (I set mimicHTTPDelaySec = 0.5, can be removed)
- all service methods in REST API style
- created small About component (for better single resp-ty of calendar comp)

