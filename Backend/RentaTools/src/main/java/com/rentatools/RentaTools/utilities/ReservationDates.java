package com.rentatools.RentaTools.utilities;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@AllArgsConstructor
@Getter @Setter
public class ReservationDates {
    private Date startDate;
    private Date endDate;
}
