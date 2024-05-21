package com.workingschedule.model;

import java.time.LocalTime;

public enum Shift {
    DAYSHIFT(LocalTime.of(6,0), LocalTime.of(18, 0)),
    NIGHTSHIFT(LocalTime.of(18, 0), LocalTime.of(6, 0)),
    DEFAULT(LocalTime.of(6, 30), LocalTime.of(14, 30));
private final LocalTime start;
private final LocalTime end;

    Shift(LocalTime start, LocalTime end) {
        this.start = start;
        this.end = end;
    }

    public LocalTime getStart() {
        return start;
    }

    public LocalTime getEnd() {
        return end;
    }
}

