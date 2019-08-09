package io.anshily.architect.model;

import java.util.Date;
import javax.persistence.*;

@Table(name = "sw_exam_message")
public class ExamMessage {
    /**
     * 考试信息表id
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    /**
     * 考试信息表对应的用户id
     */
    private Integer userid;

    private Date createtime;

    private Date endtime;

    /**
     * 考试分数
     */
    private Integer grade;

    /**
     * 考试信息状态（1：可用，2：不可用）
     */
    private Integer statu;

    /**
     * 记录的添加时间
     */
    private Date add_time;

    /**
     * 获取考试信息表id
     *
     * @return id - 考试信息表id
     */
    public Integer getId() {
        return id;
    }

    /**
     * 设置考试信息表id
     *
     * @param id 考试信息表id
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * 获取考试信息表对应的用户id
     *
     * @return userid - 考试信息表对应的用户id
     */
    public Integer getUserid() {
        return userid;
    }

    /**
     * 设置考试信息表对应的用户id
     *
     * @param userid 考试信息表对应的用户id
     */
    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    /**
     * @return createtime
     */
    public Date getCreatetime() {
        return createtime;
    }

    /**
     * @param createtime
     */
    public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }

    /**
     * @return endtime
     */
    public Date getEndtime() {
        return endtime;
    }

    /**
     * @param endtime
     */
    public void setEndtime(Date endtime) {
        this.endtime = endtime;
    }

    /**
     * 获取考试分数
     *
     * @return grade - 考试分数
     */
    public Integer getGrade() {
        return grade;
    }

    /**
     * 设置考试分数
     *
     * @param grade 考试分数
     */
    public void setGrade(Integer grade) {
        this.grade = grade;
    }

    /**
     * 获取考试信息状态（1：可用，2：不可用）
     *
     * @return statu - 考试信息状态（1：可用，2：不可用）
     */
    public Integer getStatu() {
        return statu;
    }

    /**
     * 设置考试信息状态（1：可用，2：不可用）
     *
     * @param statu 考试信息状态（1：可用，2：不可用）
     */
    public void setStatu(Integer statu) {
        this.statu = statu;
    }

    /**
     * 获取记录的添加时间
     *
     * @return add_time - 记录的添加时间
     */
    public Date getAdd_time() {
        return add_time;
    }

    /**
     * 设置记录的添加时间
     *
     * @param add_time 记录的添加时间
     */
    public void setAdd_time(Date add_time) {
        this.add_time = add_time;
    }

    @Override
    public String toString() {
        return "ExamMessage{" +
                "id=" + id +
                ", userid=" + userid +
                ", createtime=" + createtime +
                ", endtime=" + endtime +
                ", grade=" + grade +
                ", statu=" + statu +
                ", add_time=" + add_time +
                '}';
    }
}