package io.anshily.model;

import java.util.Date;
import javax.persistence.*;

@Table(name = "sw_exam_answer")
public class ExamAnswer {
    /**
     * 答案表id
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    /**
     * 对应考试信息表id
     */
    private Integer examid;

    /**
     * 对应的体面id
     */
    private Integer question_title_id;

    /**
     * 对应的题目答案
     */
    private String answer;

    /**
     * 状态（1：可用，0：不可用）
     */
    private Integer statu;

    /**
     * 新增时间
     */
    private Date add_time;

    /**
     * 获取答案表id
     *
     * @return id - 答案表id
     */
    public Integer getId() {
        return id;
    }

    /**
     * 设置答案表id
     *
     * @param id 答案表id
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * 获取对应考试信息表id
     *
     * @return examid - 对应考试信息表id
     */
    public Integer getExamid() {
        return examid;
    }

    /**
     * 设置对应考试信息表id
     *
     * @param examid 对应考试信息表id
     */
    public void setExamid(Integer examid) {
        this.examid = examid;
    }

    /**
     * 获取对应的体面id
     *
     * @return question_title_id - 对应的体面id
     */
    public Integer getQuestion_title_id() {
        return question_title_id;
    }

    /**
     * 设置对应的体面id
     *
     * @param question_title_id 对应的体面id
     */
    public void setQuestion_title_id(Integer question_title_id) {
        this.question_title_id = question_title_id;
    }

    /**
     * 获取对应的题目答案
     *
     * @return answer - 对应的题目答案
     */
    public String getAnswer() {
        return answer;
    }

    /**
     * 设置对应的题目答案
     *
     * @param answer 对应的题目答案
     */
    public void setAnswer(String answer) {
        this.answer = answer;
    }

    /**
     * 获取状态（1：可用，0：不可用）
     *
     * @return statu - 状态（1：可用，0：不可用）
     */
    public Integer getStatu() {
        return statu;
    }

    /**
     * 设置状态（1：可用，0：不可用）
     *
     * @param statu 状态（1：可用，0：不可用）
     */
    public void setStatu(Integer statu) {
        this.statu = statu;
    }

    /**
     * 获取新增时间
     *
     * @return add_time - 新增时间
     */
    public Date getAdd_time() {
        return add_time;
    }

    /**
     * 设置新增时间
     *
     * @param add_time 新增时间
     */
    public void setAdd_time(Date add_time) {
        this.add_time = add_time;
    }
}