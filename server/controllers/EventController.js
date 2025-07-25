import prisma from "../config/db.js";

export const addEvent = async (req, res) => {
  const {
    organizerName,
    locationId,
    name,
    description,
    eventDate,
    eventTime,
    doorOpeningTime,
    baseTicketPrice,
    eventPhoto,
    termsAndConditions,
    status,
  } = req.body;

  if (
    !organizerName ||
    !locationId ||
    !name ||
    !description ||
    !eventDate ||
    !eventTime ||
    !doorOpeningTime ||
    !baseTicketPrice ||
    !eventPhoto ||
    !termsAndConditions ||
    !status
  ) {
    return res.status(400).json({
      message: "Please provide all the required field",
    });
  }
  const newEvent = await prisma.event.create({
    data: {
      organizerName,
      locationId,
      name,
      description,
      eventDate,
      eventTime,
      doorOpeningTime,
      baseTicketPrice,
      eventPhoto,
      termsAndConditions,
      status,
    },
  });
  return res.status(200).json({
    message: "Event created successfully",
    data: newEvent,
  });
};

export const getAllEvent = async (req, res) => {
  try {
    const allEvent = await prisma.event.findMany({
      where: {
        isActive: true,
      },
      include: {
        location: true,
      },
    });
    if (allEvent.length == 0) {
      return res.status(404).json({
        message: "No event found",
      });
    }
    res.status(200).json({
      message: "Event fetched successfully",
      data: allEvent,
    });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({
      message: "Server Error",
    });
  }
};

export const getSingleEvent = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      message: "Please provide an ID",
    });
  }

  const eventId = parseInt(id);
  if (isNaN(eventId)) {
    return res.status(400).json({
      message: "ID must be a valid number",
    });
  }

  try {
    const foundEvent = await prisma.event.findUnique({
      where: {
        id: eventId,
      },
    });

    if (!foundEvent) {
      return res.status(404).json({
        message: "No event found with that ID",
      });
    }

    res.status(200).json({
      message: "Event fetched successfully",
      data: foundEvent,
    });
  } catch (error) {
    console.error("Error fetching event:", error);
    res.status(500).json({
      message: "Server error while fetching event",
    });
  }
};
