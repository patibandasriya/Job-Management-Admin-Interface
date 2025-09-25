import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


export type JobType = 'Full-time' | 'Part-time' | 'Contract' | 'Internship';


@Entity({ name: 'jobs' })
export class Job {
@PrimaryGeneratedColumn('uuid')
id: string;


@Column()
title: string;


@Column()
company: string;


@Column()
location: string;


@Column({ type: 'varchar' })
jobType: JobType;


@Column()
salaryRange: string;


@Column({ type: 'text' })
description: string;


@Column({ type: 'text', nullable: true })
requirements?: string;


@Column({ type: 'text', nullable: true })
responsibilities?: string;


@Column({ type: 'date', nullable: true })
applicationDeadline?: string;


@Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
createdAt: Date;
}
