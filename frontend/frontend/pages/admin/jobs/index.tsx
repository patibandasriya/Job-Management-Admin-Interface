import React, { useEffect, useState } from 'react';


async function fetchJobs() {
const params = new URLSearchParams();
if (title) params.set('title', title);
if (location) params.set('location', location);
if (jobType) params.set('jobType', jobType);


const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:4000'}/jobs?${params.toString()}`);
const data = await res.json();
setJobs(data.data || data);
}


useEffect(() => { fetchJobs(); }, []);


return (
<Container size="lg">
<Text size="xl" weight={700} my="md">Job Management — Admin</Text>


<Grid mb="md">
<Grid.Col span={3}>
<TextInput label="Job Title" value={title} onChange={(e) => setTitle(e.currentTarget.value)} />
</Grid.Col>
<Grid.Col span={3}>
<TextInput label="Location" value={location} onChange={(e) => setLocation(e.currentTarget.value)} />
</Grid.Col>
<Grid.Col span={3}>
<Select label="Job Type" data={[{ value: '', label: 'Any' }, ...JOB_TYPES.map((t) => ({ value: t, label: t }))]} value={jobType || ''} onChange={(v) => setJobType(v || null)} />
</Grid.Col>
<Grid.Col span={3}>
<Text size="sm">Salary Range (Lakhs)</Text>
<RangeSlider value={salaryRange} onChange={setSalaryRange} min={0} max={100} marks={[{ value: 0, label: '0' }, { value: 100, label: '100' }]} />
</Grid.Col>
</Grid>


<Button mb="md" onClick={fetchJobs}>Apply Filters</Button>


{jobs.length === 0 && <Text>No jobs found</Text>}


<Grid>
{jobs.map((j) => (
<Grid.Col span={4} key={j.id}>
<Card shadow="sm" padding="lg">
<Text weight={700}>{j.title}</Text>
<Text size="sm">{j.company} — {j.location}</Text>
<Text size="xs">{j.jobType} • {j.salaryRange}</Text>
<Text mt="sm" size="sm" lineClamp={3}>{j.description}</Text>
</Card>
</Grid.Col>
))}
</Grid>
</Container>
);
}
