/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package client.inventory;

/**
 *
 * @author Pungin
 */
public enum EchantScroll {

    攻擊力_力量_100("攻擊力(力量)", 100, 0, 2, EchantEquipStat.STR.getValue() | EchantEquipStat.WATK.getValue(), new int[]{1, 3}),
    攻擊力_力量_70("攻擊力(力量)", 70, 1, 3, EchantEquipStat.STR.getValue() | EchantEquipStat.WATK.getValue(), new int[]{2, 5}),
    攻擊力_力量_30("攻擊力(力量)", 30, 2, 4, EchantEquipStat.STR.getValue() | EchantEquipStat.WATK.getValue(), new int[]{3, 7}),
    攻擊力_力量_15("攻擊力(力量)", 15, 3, 5, EchantEquipStat.STR.getValue() | EchantEquipStat.WATK.getValue(), new int[]{4, 9}),
    魔力_智力_100("魔力(智力)", 100, 0, 2, EchantEquipStat.INT.getValue() | EchantEquipStat.MATK.getValue(), new int[]{1, 3}),
    魔力_智力_70("魔力(智力)", 70, 1, 3, EchantEquipStat.INT.getValue() | EchantEquipStat.MATK.getValue(), new int[]{2, 5}),
    魔力_智力_30("魔力(智力)", 30, 2, 4, EchantEquipStat.INT.getValue() | EchantEquipStat.MATK.getValue(), new int[]{3, 7}),
    魔力_智力_15("魔力(智力)", 15, 3, 5, EchantEquipStat.INT.getValue() | EchantEquipStat.MATK.getValue(), new int[]{4, 9}),
    攻擊力_敏捷_100("攻擊力(敏捷)", 100, 0, 2, EchantEquipStat.DEX.getValue() | EchantEquipStat.WATK.getValue(), new int[]{1, 3}),
    攻擊力_敏捷_70("攻擊力(敏捷)", 70, 1, 3, EchantEquipStat.DEX.getValue() | EchantEquipStat.WATK.getValue(), new int[]{2, 5}),
    攻擊力_敏捷_30("攻擊力(敏捷)", 30, 2, 4, EchantEquipStat.DEX.getValue() | EchantEquipStat.WATK.getValue(), new int[]{3, 7}),
    攻擊力_敏捷_15("攻擊力(敏捷)", 15, 3, 5, EchantEquipStat.DEX.getValue() | EchantEquipStat.WATK.getValue(), new int[]{4, 9}),
    攻擊力_幸運_100("攻擊力(幸運)", 100, 0, 2, EchantEquipStat.LUK.getValue() | EchantEquipStat.WATK.getValue(), new int[]{1, 3}),
    攻擊力_幸運_70("攻擊力(幸運)", 70, 1, 3, EchantEquipStat.LUK.getValue() | EchantEquipStat.WATK.getValue(), new int[]{2, 5}),
    攻擊力_幸運_30("攻擊力(幸運)", 30, 2, 4, EchantEquipStat.LUK.getValue() | EchantEquipStat.WATK.getValue(), new int[]{3, 7}),
    攻擊力_幸運_15("攻擊力(幸運)", 15, 3, 5, EchantEquipStat.LUK.getValue() | EchantEquipStat.WATK.getValue(), new int[]{4, 9}),
    攻擊力_體力_100("攻擊力(體力)", 100, 0, 2, EchantEquipStat.MHP.getValue() | EchantEquipStat.WATK.getValue(), new int[]{50, 3}),
    攻擊力_體力_70("攻擊力(體力)", 70, 1, 3, EchantEquipStat.MHP.getValue() | EchantEquipStat.WATK.getValue(), new int[]{5, 100}),
    攻擊力_體力_30("攻擊力(體力)", 30, 2, 4, EchantEquipStat.MHP.getValue() | EchantEquipStat.WATK.getValue(), new int[]{7, 150}),
    攻擊力_體力_15("攻擊力(體力)", 15, 3, 5, EchantEquipStat.MHP.getValue() | EchantEquipStat.WATK.getValue(), new int[]{9, 200}),
    攻擊力_100("攻擊力", 100, 0, 2, EchantEquipStat.WATK.getValue(), new int[]{1}),
    攻擊力_70("攻擊力", 70, 1, 3, EchantEquipStat.WATK.getValue(), new int[]{2}),
    攻擊力_30("攻擊力", 30, 2, 4, EchantEquipStat.WATK.getValue(), new int[]{3}),
    魔力_100("魔力", 100, 0, 2, EchantEquipStat.MATK.getValue(), new int[]{1}),
    魔力_70("魔力", 70, 1, 3, EchantEquipStat.MATK.getValue(), new int[]{2}),
    魔力_30("魔力", 30, 2, 4, EchantEquipStat.MATK.getValue(), new int[]{3}),
    力量_100("力量", 100, 0, 2, EchantEquipStat.STR.getValue() | EchantEquipStat.MDEF.getValue() | EchantEquipStat.WDEF.getValue() | EchantEquipStat.MHP.getValue(), new int[]{3, 3, 3, 30}),
    力量_70("力量", 70, 1, 3, EchantEquipStat.STR.getValue() | EchantEquipStat.MDEF.getValue() | EchantEquipStat.WDEF.getValue() | EchantEquipStat.MHP.getValue(), new int[]{4, 5, 5, 70}),
    力量_30("力量", 30, 2, 4, EchantEquipStat.STR.getValue() | EchantEquipStat.MDEF.getValue() | EchantEquipStat.WDEF.getValue() | EchantEquipStat.MHP.getValue(), new int[]{7, 10, 10, 120}),
    體力_100("體力", 100, 0, 2, EchantEquipStat.MDEF.getValue() | EchantEquipStat.WDEF.getValue() | EchantEquipStat.MHP.getValue(), new int[]{3, 3, 3, 30}),
    體力_70("體力", 70, 1, 3, EchantEquipStat.MDEF.getValue() | EchantEquipStat.WDEF.getValue() | EchantEquipStat.MHP.getValue(), new int[]{4, 5, 5, 70}),
    體力_30("體力", 30, 2, 4, EchantEquipStat.MDEF.getValue() | EchantEquipStat.WDEF.getValue() | EchantEquipStat.MHP.getValue(), new int[]{7, 10, 10, 120}),
    智力_100("智力", 100, 0, 2, EchantEquipStat.INT.getValue() | EchantEquipStat.MDEF.getValue() | EchantEquipStat.WDEF.getValue() | EchantEquipStat.MHP.getValue(), new int[]{3, 3, 3, 30}),
    智力_70("智力", 70, 1, 3, EchantEquipStat.INT.getValue() | EchantEquipStat.MDEF.getValue() | EchantEquipStat.WDEF.getValue() | EchantEquipStat.MHP.getValue(), new int[]{4, 5, 5, 70}),
    智力_30("智力", 30, 2, 4, EchantEquipStat.INT.getValue() | EchantEquipStat.MDEF.getValue() | EchantEquipStat.WDEF.getValue() | EchantEquipStat.MHP.getValue(), new int[]{7, 10, 10, 120}),
    敏捷_100("敏捷", 100, 0, 2, EchantEquipStat.DEX.getValue() | EchantEquipStat.MDEF.getValue() | EchantEquipStat.WDEF.getValue() | EchantEquipStat.MHP.getValue(), new int[]{3, 3, 3, 30}),
    敏捷_70("敏捷", 70, 1, 3, EchantEquipStat.DEX.getValue() | EchantEquipStat.MDEF.getValue() | EchantEquipStat.WDEF.getValue() | EchantEquipStat.MHP.getValue(), new int[]{4, 5, 5, 70}),
    敏捷_30("敏捷", 30, 2, 4, EchantEquipStat.DEX.getValue() | EchantEquipStat.MDEF.getValue() | EchantEquipStat.WDEF.getValue() | EchantEquipStat.MHP.getValue(), new int[]{7, 10, 10, 120}),
    幸運_100("幸運", 100, 0, 2, EchantEquipStat.LUK.getValue() | EchantEquipStat.MDEF.getValue() | EchantEquipStat.WDEF.getValue() | EchantEquipStat.MHP.getValue(), new int[]{3, 3, 3, 30}),
    幸運_70("幸運", 70, 1, 3, EchantEquipStat.LUK.getValue() | EchantEquipStat.MDEF.getValue() | EchantEquipStat.WDEF.getValue() | EchantEquipStat.MHP.getValue(), new int[]{4, 5, 5, 70}),
    幸運_30("幸運", 30, 2, 4, EchantEquipStat.LUK.getValue() | EchantEquipStat.MDEF.getValue() | EchantEquipStat.WDEF.getValue() | EchantEquipStat.MHP.getValue(), new int[]{7, 10, 10, 120}),
    ;

    private final String name;
    private final int successRate;
    private final int viewType;
    private final int cost;
    private final int mask;
    private final int[] values;

    private EchantScroll(String name, int successRate, int viewType, int cost, int mask, int[] values) {
        this.name = name;
        this.successRate = successRate;
        this.viewType = viewType;
        this.cost = cost;
        this.mask = mask;
        this.values = values;
    }

    public String getName() {
        return successRate + "% " + name + "卷軸";
    }

    public int getSuccessRate() {
        return successRate;
    }

    public int getViewType() {
        return viewType;
    }

    public int getCost() {
        return cost;
    }

    public int getMask() {
        return mask;
    }

    public int[] getValues() {
        return values;
    }
}
