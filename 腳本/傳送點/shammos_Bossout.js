function enter(pi) {
        if (pi.getPlayer().getParty() != null && pi.getMap().getAllMonstersThreadsafe().size() == 0 && pi.isLeader()) {
                //pi.warpParty_Instanced(921120600);
		pi.warpParty(pi.isGMS() ? 921120400 : 921120600); //TODO JUMP
                pi.playPortalSE();
        } else {
                pi.playerMessage(5,"This portal is not available. Destroy Rex first.");
        }
}