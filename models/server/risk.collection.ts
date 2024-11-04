import { IndexType, Permission } from 'node-appwrite';

import { db, riskCollection } from '../name';
import { databases } from './config';

export default async function createRiskCollection() {
    // Create the risk collection with permissions
    await databases.createCollection(db, riskCollection, riskCollection, [
        Permission.read("any"),
        Permission.read("users"),
        Permission.create("users"),
        Permission.update("users"),
        Permission.delete("users"),
    ]);

    console.log("Risk Collection is created");

    // Define the enum values for action and impact
    const actionEnumValues = [
        "mitigate",  // Example action
        "accept",    // Example action
        "transfer",  // Example action
        "avoid"      // Example action
    ];

    const impactEnumValues = [
        "low",       // Example impact level
        "medium",    // Example impact level
        "high"       // Example impact level
    ];

    // Create attributes
    await Promise.all([
        databases.createStringAttribute(db, riskCollection, "title", 100, true),
        databases.createStringAttribute(db, riskCollection, "content", 10000, true),
        databases.createStringAttribute(db, riskCollection, "authorId", 100, true),
        databases.createStringAttribute(db, riskCollection, "tags", 100, true, undefined, true),
        databases.createStringAttribute(db, riskCollection, "attachmentId", 100, false),
        databases.createEnumAttribute(db, riskCollection, "impact", impactEnumValues, true), // Impact as an enum
        databases.createStringAttribute(db, riskCollection, "probability", 3, true), // Probability as a numerical value
        databases.createEnumAttribute(db, riskCollection, "action", actionEnumValues, true), // Action as an enum
        databases.createDatetimeAttribute(db, riskCollection, "created", true), // Created date
        databases.createDatetimeAttribute(db, riskCollection, "updated", true), // Updated date
    ]);

    console.log("Risk Attributes created");

    // Create indexes for full-text search on title, content, impact, probability, and action
    await Promise.all([
        databases.createIndex(db, riskCollection, 'title', IndexType.Fulltext, ['title'], ['asc']),
        databases.createIndex(db, riskCollection, 'content', IndexType.Fulltext, ['content'], ['asc']),
        databases.createIndex(db, riskCollection, 'impact', IndexType.Fulltext, ['impact'], ['asc']),
        databases.createIndex(db, riskCollection, 'probability', IndexType.Fulltext, ['probability'], ['asc']),
        databases.createIndex(db, riskCollection, 'action', IndexType.Fulltext, ['action'], ['asc']),
        databases.createIndex(db, riskCollection, 'created', IndexType.Fulltext, ['created'], ['asc']), // Index for created date
        databases.createIndex(db, riskCollection, 'updated', IndexType.Fulltext, ['updated'], ['asc']), // Index for updated date
    ]);
}
