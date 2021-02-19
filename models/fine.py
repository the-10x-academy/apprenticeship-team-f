d2, m2, y2 = [int(i) for i in input().split()]
d1, m1, y1 = [int(i) for i in input().split()]

fine = 0
if y2 > y1:
    fine = (y2-y1) * 10000
elif y2 < y1:
    fine = 0
elif m2 > m1:
    fine = (m2-m1) * 500
elif m2 < m1:
    fine = 0
elif d2 > d1:
    fine = (d2-d1) * 15
elif d2 < d1:
    fine = 0
print(fine)  


# Fine
# Your local library needs your help! Given the expected and actual return dates for a library book, create a program that calculates the fine (if any). The fee structure is as follows:

# If the book is returned on or before the expected return date, no fine will be charged (i.e.: fine = 0.
# If the book is returned after the expected return day but still within the same calendar month and year as the expected return date, fine = 15 x (the number of days late).
# If the book is returned after the expected return month but still within the same calendar year as the expected return date, the fine = 500 x (the number of months late).
# If the book is returned after the calendar year in which it was expected, there is a fixed fine of 10000.
# Charges are based only on the least precise measure of lateness. For example, whether a book is due January 1, 2017 or December 31, 2017, if it is returned January 1, 2018, that is a year late and the fine would be 10,000.

# Input Format
# The first line contains 3 space-separated integers, d1, m1, y1, denoting the respective day, month, and year on which the book was returned.

# The second line contains 3 space-separated integers, d2, m2, y2, denoting the respective day, month, and year on which the book was due to be returned.

# Output Format
# Print the amount of the fine or 0 if there is none.

# Constraints
# The dates will be valid Gregorian calender dates.
# Sample Input
# 9 6 2015
# 6 6 2015
# Sample Output
# 45