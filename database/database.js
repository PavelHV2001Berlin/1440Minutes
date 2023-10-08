import { Activity, Routine } from "../models/Routine";
let routinen = [
    new Routine("Morning-Routine", "05:30", [new Activity("Kalt duschen", 20), new Activity("Kaffee trinken", 20), new Activity("Training", 90), new Activity("Lesen", 30)]),
    new Routine("Arbeitsroutine", "08:30", [new Activity("Tagesziele festlegen", 15), new Activity("Kaffee machen", 10), new Activity("Erster Arbeitsblock", 90), new Activity("Kurze Pause", 15), new Activity("Zweiter Arbeitsblock", 90),new Activity("Mittagsspaziergang", 60), new Activity("Projektarbeit", 170)]),
    new Routine("Mittagessen", "16:00", [new Activity("Essen zubereiten", 30), new Activity("Essen", 45)]),
    new Routine("Freizeit", "17:30", [new Activity("Eigeninitiative", 90)]),
    new Routine("Abendroutine", "19:30", [new Activity("Journal schreiben", 15), new Activity("Ziele für morgen", 10), new Activity("Stretching", 10), new Activity("Lesen", 20), new Activity("Schlafen gehen", 5)]),
]

export default routinen