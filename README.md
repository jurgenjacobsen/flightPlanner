# Flight Planner
A flight planning app made to confirm your hand-made flight plans data.

![wakatime](https://wakatime.com/badge/user/010adc07-6382-419f-87bc-0b3f507ee495/project/9abf2987-80ba-4c9b-89ab-8d8279134ab0.svg?style=flat-square)
![Gitmoji](https://img.shields.io/badge/gitmoji-%20%E2%9C%88%EF%B8%8F%20%F0%9F%98%8D-191919.svg?style=flat-square)

## Features
- **Navigation Log** generator.
- Aircraft performance calculator.

## Complete idea
The project itself in its essence is inspired by a great simulator flight planning tool called [Simbrief](https://simbrief.com) & [Navigraph Charts](https://navigraph.com/products/charts).
The idea came as sometimes you may start to have doubts about how correct your calculations are or you just want to make sure everything is correct and precise, so this tool is here to help you on your **VFR planning**.
As I'm a student developer it is also a great challenge for me to develop something so new to my scope.

> **Attention: This tool was never meant substitute your hand-made planning or your organization standard practice tool!**
  
## Execution (Minimum Viable Product)
The minimum viable product is the most basic functional the developed platform can be as so it demonstrates its potentional. After a test phase further development will be executed.
*The main plan is to develop this as a standalone platform/app and then if makes sense and it's viable will be migrated into [FlownRecords](https://github.com/jurgenjacobsen/flownRecords)*
- **Nav. Log Generator**
  - User inputs:
    - Departure/Arrival Aerodromes;
    - Route (VFR Waypoints)
    - Aircraft Type
    - Legs' Altitude & Wind
    - Cruise Altitudes' Temperature
    - Initial Fuel on Board
  - Generator Output:
    - A visualizer of the whole flight plan with all calculations done.
    - A exportable/printable PDF version of the OFP.
    - Exportable to Cloud (Flown Records Account) option.
- **Database**<br>
  There will be a local/api database made by the own @flownRecords team covering aircraft performance for calculations and navigation data for route planning.
  - Aicraft DB:
    The aircraft's database will have all POH's performance information needed for the performance calculations of the platform.
  - Navigation DB:
    The navigaion database will contain as many as possible VFR waypoints inside a specific FIR, aerodromes information for navigation and later on will also add VOR information as a way to cross-check positions during flight. 
    Starting off with the LPPC FIR navigation data and then expanding for more FIRs.
    


## Execution (Expansion)
After the main and base product is in a solid phase of development the following features may be added to complement the user experience.

- [ ] PDF OFP generator to be printed or saved.
- [ ] Cloud upload (save on FlownRecords Account)
      The user will be able to associate the OFP to a flight you have saved on the logbook using the Flight Tracker information, is this way you'll be able to cross check how accurately you've flown in terms of cross-track deviation and timings.
- [ ] EFB packager generating a complete package of all information needed for a flight, alongside the navigation log will also container weather briefing, NOTAMs, etc.
- [ ] Takeoff/landing performance calculator.
- [ ] Automatically fetch weather (wind and tempeature) for each leg.
- [ ] Weather briefing fetch for EFB.
- [ ] Relevant NOTAMs for the operation to be included in the EFB.
- [ ] Expand aircraft & navigation database. (Add C172 and LECM FIR)
