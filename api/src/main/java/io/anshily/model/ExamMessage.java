package io.anshily.model;

import java.util.Date;
import javax.persistence.*;

@Table(name = "sw_exam_message")
public class ExamMessage {
    /**
     * 考试信息表id
     */
    @Id
    @Column(name = "`e_ m_id`")
    private Integer e_ m_id;

    /**
     * 考试信息表对应的用户id
     */
    @Column(name = "`e_ m_userid`")
    private Integer e_ m_userid;

    @Column(name = "`e_ m_createtime`")
    private Date e_ m_createtime;

    @Column(name = "`e_ m_endtime`")
    private Date e_ m_endtime;

    /**
     * 考试分数
     */
    @Column(name = "`e_ m_grade`")
    private Integer e_ m_grade;

    /**
     * 考试信息状态（1：可用，2：不可用）
     */
    @Column(name = "`e_ m_statu`")
    private Integer e_ m_statu;

    /**
     * 获取考试信息表id
     *
     * @return e_ m_id - 考试信息表id
     */
    public Integer getE_ m_id() {
        return e_ m_id;
    }

    /**
     * 设置考试信息表id
     *
     * @param e_ m_id 考试信息表id
     */
    public void setE_ m_id(Integer e_ m_id) {
        this.e_ m_id = e_ m_id;
    }

    /**
     * 获取考试信息表对应的用户id
     *
     * @return e_ m_userid - 考试信息表对应的用户id
     */
    public Integer getE_ m_userid() {
        return e_ m_userid;
    }

    /**
     * 设置考试信息表对应的用户id
     *
     * @param e_ m_userid 考试信息表对应的用户id
     */
    public void setE_ m_userid(Integer e_ m_userid) {
        this.e_ m_userid = e_ m_userid;
    }

    /**
     * @return e_ m_createtime
     */
    public Date getE_ m_createtime() {
        return e_ m_createtime;
    }

    /**
     * @param e_ m_createtime
     */
    public void setE_ m_createtime(Date e_ m_createtime) {
        this.e_ m_createtime = e_ m_createtime;
    }

    /**
     * @return e_ m_endtime
     */
    public Date getE_ m_endtime() {
        return e_ m_endtime;
    }

    /**
     * @param e_ m_endtime
     */
    public void setE_ m_endtime(Date e_ m_endtime) {
        this.e_ m_endtime = e_ m_endtime;
    }

    /**
     * 获取考试分数
     *
     * @return e_ m_grade - 考试分数
     */
    public Integer getE_ m_grade() {
        return e_ m_grade;
    }

    /**
     * 设置考试分数
     *
     * @param e_ m_grade 考试分数
     */
    public void setE_ m_grade(Integer e_ m_grade) {
        this.e_ m_grade = e_ m_grade;
    }

    /**
     * 获取考试信息状态（1：可用，2：不可用）
     *
     * @return e_ m_statu - 考试信息状态（1：可用，2：不可用）
     */
    public Integer getE_ m_statu() {
        return e_ m_statu;
    }

    /**
     * 设置考试信息状态（1：可用，2：不可用）
     *
     * @param e_ m_statu 考试信息状态（1：可用，2：不可用）
     */
    public void setE_ m_statu(Integer e_ m_statu) {
        this.e_ m_statu = e_ m_statu;
    }
}