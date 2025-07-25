import prisma from "../config/db";

export const createBooking = async (req, res) => {
  const {
    eventId,
    userId,
    bookingCategory,
    bookingDate,
    numberOfTickets,
    price,
    totalPrice,
  } = req.body;

  if (
    !eventId ||
    !userId ||
    !bookingCategory ||
    !bookingDate ||
    !numberOfTickets ||
    !price ||
    !totalPrice
  ) {
    return res.status(400).json({
      message: 'Please provide all required fields',
    });
  }

  try {
    const newBooking = await prisma.booking.create({
      data: {
        eventId: Number(eventId),
        userId: Number(userId),
        bookingCategory,
        bookingDate: new Date(bookingDate),
        numberOfTickets: Number(numberOfTickets),
        price: Number(price),
        totalPrice: Number(totalPrice),
      },
    });

    return res.status(201).json({
      message: 'Booking created successfully',
      booking: newBooking,
    });
  } catch (error) {
    console.error('Booking creation error:', error);
    return res.status(500).json({
      message: 'Something went wrong during booking creation',
      error: error.message,
    });
  }
};

export const getAllBookings = async (req, res) => {
  try {
    const bookings = await prisma.booking.findMany({
      where: {
        isActive: true,
      },
      include: {
        user: true,
        event: true,
      },
    });

    return res.status(200).json(bookings);
  } catch (error) {
    return res.status(500).json({
      message: 'Failed to fetch bookings',
      error: error.message,
    });
  }
};

export const getBookingById = async (req, res) => {
  const { id } = req.params;

  try {
    const booking = await prisma.booking.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        user: true,
        event: true,
      },
    });

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    return res.status(200).json(booking);
  } catch (error) {
    return res.status(500).json({
      message: 'Failed to fetch booking',
      error: error.message,
    });
  }
};

export const updateBooking = async (req, res) => {
  const { id } = req.params;
  const {
    bookingCategory,
    bookingDate,
    numberOfTickets,
    price,
    totalPrice,
  } = req.body;

  try {
    const updatedBooking = await prisma.booking.update({
      where: { id: Number(id) },
      data: {
        bookingCategory,
        bookingDate: bookingDate ? new Date(bookingDate) : undefined,
        numberOfTickets: numberOfTickets ? Number(numberOfTickets) : undefined,
        price: price ? Number(price) : undefined,
        totalPrice: totalPrice ? Number(totalPrice) : undefined,
        updatedAt: new Date(),
      },
    });

    return res.status(200).json({
      message: 'Booking updated successfully',
      booking: updatedBooking,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Failed to update booking',
      error: error.message,
    });
  }
};

export const deleteBooking = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBooking = await prisma.booking.update({
      where: { id: Number(id) },
      data: {
        isActive: false,
        deletedAt: new Date(),
      },
    });

    return res.status(200).json({
      message: 'Booking deleted successfully (soft delete)',
      booking: deletedBooking,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Failed to delete booking',
      error: error.message,
    });
  }
};
