package client;

import java.io.Serializable;

public class SkillEntry implements Serializable {

    private static final long serialVersionUID = 9179541993413738569L;
    public int skillLevel;
    public byte masterlevel;
    public long expiration;
    public int teachId;//國服添加

    public SkillEntry(final int skillevel, final byte masterlevel, final long expiration) {
        this.skillLevel = skillevel;
        this.masterlevel = masterlevel;
        this.expiration = expiration;
        this.teachId = teachId;//國服添加
    }
}
