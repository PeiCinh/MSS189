/* global pi */

function enter(pi) {
    if (pi.getMap().getAllMonstersThreadsafe().size() === 0) {
        pi.openNpc("kine_tutoout");
    }
}
