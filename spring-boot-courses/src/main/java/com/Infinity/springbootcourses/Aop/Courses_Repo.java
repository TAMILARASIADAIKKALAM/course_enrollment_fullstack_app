package com.Infinity.springbootcourses.Aop;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Infinity.springbootcourses.Entity.Courses;


public interface Courses_Repo extends JpaRepository<Courses,Long>
{

}
