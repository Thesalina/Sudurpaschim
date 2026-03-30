import Destination from "../models/Destination.js";

export async function getDestinations(request, response) {
  const { category, search } = request.query;

  const query = {};

  if (category && category !== "All") {
    query.category = category;
  }

  if (search) {
    query.$or = [
      { name: { $regex: search, $options: "i" } },
      { location: { $regex: search, $options: "i" } },
      { sub: { $regex: search, $options: "i" } },
    ];
  }

  const destinations = await Destination.find(query).sort({ name: 1 });

  response.json({
    success: true,
    count: destinations.length,
    data: destinations,
  });
}

export async function getDestinationById(request, response) {
  const destination = await Destination.findOne({ id: request.params.destinationId });

  if (!destination) {
    return response.status(404).json({
      success: false,
      message: "Destination not found.",
    });
  }

  response.json({
    success: true,
    data: destination,
  });
}

export async function createDestination(request, response) {
  const destination = await Destination.create(request.body);

  response.status(201).json({
    success: true,
    message: "Destination created successfully.",
    data: destination,
  });
}

export async function updateDestination(request, response) {
  const destination = await Destination.findOneAndUpdate(
    { id: request.params.destinationId },
    request.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!destination) {
    return response.status(404).json({
      success: false,
      message: "Destination not found.",
    });
  }

  response.json({
    success: true,
    message: "Destination updated successfully.",
    data: destination,
  });
}

export async function deleteDestination(request, response) {
  const destination = await Destination.findOneAndDelete({
    id: request.params.destinationId,
  });

  if (!destination) {
    return response.status(404).json({
      success: false,
      message: "Destination not found.",
    });
  }

  response.json({
    success: true,
    message: "Destination deleted successfully.",
    data: destination,
  });
}
