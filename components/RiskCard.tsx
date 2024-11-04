import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Paperclip, Clock, User } from "lucide-react";

interface RiskCardProps {
  title: string;
  content: string;
  authorId: string;
  tags: string[];
  attachmentId?: string;
  impact: "low" | "medium" | "high";
  probability: string;
  action: "mitigate" | "accept" | "transfer" | "avoid";
  created: string;
  updated: string;
}

const getImpactColor = (impact: "low" | "medium" | "high") => {
  switch (impact) {
    case "low":
      return "bg-green-100 text-green-800";
    case "medium":
      return "bg-yellow-100 text-yellow-800";
    case "high":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getActionColor = (
  action: "mitigate" | "accept" | "transfer" | "avoid"
) => {
  switch (action) {
    case "mitigate":
      return "bg-blue-100 text-blue-800";
    case "accept":
      return "bg-green-100 text-green-800";
    case "transfer":
      return "bg-purple-100 text-purple-800";
    case "avoid":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

// Function to get color for probability (you can customize thresholds as needed)
const getProbabilityColor = (probability: string) => {
  if (probability === "high") {
    return "bg-red-100 text-red-800";
  } else if (probability === "medium") {
    return "bg-yellow-100 text-yellow-800";
  }
  return "bg-green-100 text-green-800"; // Low or unspecified
};

const RiskCard: React.FC<RiskCardProps> = ({
  title,
  content,
  authorId,
  tags,
  attachmentId,
  impact,
  probability,
  action,
  created,
  updated,
}) => {
  return (
    <Card className="w-full hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <div className="flex gap-2">
            <Badge variant="outline" className={getImpactColor(impact)}>
              {impact} impact
            </Badge>
            <Badge variant="outline" className={getActionColor(action)}>
              {action}
            </Badge>
            <Badge
              variant="outline"
              className={getProbabilityColor(probability)}
            >
              Probability: {probability}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{content}</p>

        <div className="flex flex-wrap gap-1 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{authorId}</span>
          </div>

          <div className="flex items-center gap-1">
            {attachmentId && <Paperclip className="w-4 h-4" />}
          </div>

          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>Created: {new Date(created).toLocaleDateString()}</span>
          </div>

          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>Updated: {new Date(updated).toLocaleDateString()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RiskCard;
